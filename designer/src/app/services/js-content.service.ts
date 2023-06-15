import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { TWidget } from '../types/widget';
import { TEMPLATE_PATH_JS, MASK_FOR_INSERT_CONTENT_IN_TEMPLATE_PATH_JS, ERRORS_TXT } from '../configs/configs';
import { WidgetTypeEnum } from '../components/widgets/enum';
import { TWidgetTextInput } from '../components/widgets/text-input/type';
import { TWidgetButton } from '../components/widgets/button/type';
import { TWidgetImage } from '../components/widgets/image/type';

@Injectable()
export class JsContentService {

  constructor(private http: HttpClient) { 

  }

  public async getContent(widgets: TWidget[]): Promise<string> {
        let exportStr = '';

        widgets.forEach(item => {
        if (item.type === WidgetTypeEnum.textInput) {
            exportStr += this._getElementInputText(item.configuration);
        } else if (item.type === WidgetTypeEnum.button) {
            exportStr += this._getElemenButton(item.configuration);
        } else if (item.type === WidgetTypeEnum.image) {
            exportStr += this.getElemenImage(item.configuration);
        }
        });

        if (exportStr.length) {
            try {
                return this._getTest().then((template: string) => {
                    return template.replace(MASK_FOR_INSERT_CONTENT_IN_TEMPLATE_PATH_JS, exportStr);
                });
            } catch (e) {
                alert(ERRORS_TXT.wrongLoadJsTemplate);
            }
        }

        return Promise.resolve('');
    }

    private _getElementInputText(widget: TWidgetTextInput): string {
        return `
            createElementInputText(
                "${ this.prepareText(widget.identifier) }",
                "${ this.prepareText(widget.text) }", 
                "${ this.prepareText(widget.placeholder) }",
                function click() {
                    ${ widget.click ? this.prepareText(widget.click) : ''}
                },
                function callback() {
                    ${ widget.callback ? this.prepareText(widget.callback) : ''}
                },
            );
        `;
    }

    private _getElemenButton(widget: TWidgetButton): string {
        return `
            createElementButton(
                "${ this.prepareText(widget.identifier) }",
                "${ this.prepareText(widget.text) }",
                "${ this.prepareText(widget.bgColor) }",
                function click() {
                    ${ widget.click ? this.prepareText(widget.click) : ''}
                }
            );
        `;
    }

    private getElemenImage(widget: TWidgetImage): string {
        return `
            createElementImage(
                "${ this.prepareText(widget.identifier) }",
                "${ this.prepareText(widget.src) }",
                function click() {
                    ${ widget.click ? this.prepareText(widget.click) : ''}
                }
            );
        `;
    }

    private prepareText(str: string): string { // TODO add some filters in future
        return str;
    }

    private _getTest(): Promise<string> {
        return firstValueFrom(
            this.http.get(TEMPLATE_PATH_JS, {responseType: 'text'})
        );
    }
}
