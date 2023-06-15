import { Injectable } from '@angular/core';

import { WidgetsService } from './widgets.service';
import { ERRORS_TXT, EXPORT_FILE_NAME_JS, EXPORT_FILE_NAME_JSON } from '../configs/configs';
import { JsContentService } from './js-content.service';

@Injectable()
export class WidgetsConfigurationService {
  private _isLoading: boolean = false;

  constructor(
    private widgetsService: WidgetsService,
    private jsContentService: JsContentService
  ) {

  }

  public get isLoading(): boolean {
    return this._isLoading;
  }

  public async createJS(): Promise<void> {
    this._isLoading = true;

    try {
      const widgets = this.widgetsService.widgets;
      if (widgets.length) {
        const result = await this.jsContentService.getContent(widgets);
        this._download(result, EXPORT_FILE_NAME_JS);
      }
    } catch(e) {
      console.error(e);
      alert(ERRORS_TXT.createJsSaveFileError);
    } finally {
      this._isLoading = false;
    }
  }

  public createJSON(): void {
    this._isLoading = true;

    try {
      const configuration: string = JSON.stringify({
        items: this.widgetsService.widgets,
        dateTime: new Date().toISOString()
      });

      console.log('configuration', configuration);
      this._download(configuration, EXPORT_FILE_NAME_JSON);
    } catch(e) {
      console.error(e);
      alert(ERRORS_TXT.createJsonSaveFileError);
    } finally {
      this._isLoading = false;
    }
  }

  private _download(input: string, fileName: string, contentType = 'text/plain'): void {
    const a: HTMLAnchorElement = document.createElement('a');
    const file = new Blob([input], {type: contentType});

    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    a.remove();
  }
}
