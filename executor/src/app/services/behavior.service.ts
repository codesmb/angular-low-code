import { Injectable } from '@angular/core';

import { ConfigurationService } from './configuration.service';
import { WidgetTypeEnum } from '../enums/widget-type';
import { BehaviorSubject } from 'rxjs';
import { TWidget } from '../types/widget';
import { TWidgetTextInput } from '../types/widget-text-input';
import { TWidgetTree } from '../types/widget-tree';
import { TWidgetImage } from '../types/widget-image';
import { TWidgetButton } from '../types/widget-button';
import { ERROR_MSG } from '../config/config';

@Injectable()
export class BehaviorService {
  public widgets$ = new BehaviorSubject<any[]>([]);
  private _tree: TWidgetTree = {};
  private _list: (TWidgetTextInput | TWidgetImage | TWidgetButton)[] = [];

  constructor(private configurationService: ConfigurationService) { 
    configurationService.init().then(() => {
      this._init();
    });
  }

  public updateChangesCallback(input: TWidgetTextInput): void {
    const item = this._getItem(input);
    if (!item) return;

    if (item.type === WidgetTypeEnum.textInput) {
      (item as TWidgetTextInput).text = (input as TWidgetTextInput).text;
    }

    input.callback && this._runFunction(input.callback);
  }

  public updateChangesClick(input: TWidgetTextInput | TWidgetImage | TWidgetButton): void {
    const item = this._getItem(input);
    if (!item) return;

    item.click && this._runFunction(item.click);
  }

  private _init(): void {
    const items: TWidget[] = this.configurationService.items;

    if (items.length) {
      items.forEach((item) => {
        const configuration = item.configuration;

        if (!configuration) return;

        const newItem: TWidgetTextInput | TWidgetImage | TWidgetButton = {
          ...item.configuration,
          type: item.type,
        };

        this._list.push(newItem);
        this._tree[configuration.identifier] = newItem;
      });

      this.widgets$.next(this._list);
    }
  }

  private _getItem(input: TWidgetTextInput | TWidgetImage | TWidgetButton): TWidgetTextInput | TWidgetImage | TWidgetButton | null {
    if (!input) return null;
    return this._tree[input.identifier] || null;
  }

  private _runFunction(func: string): void {
    const widgets = this._tree;
    try {
      eval(func);
    } catch(err) {
      alert(ERROR_MSG.evalError);
    } finally {
      this._updateStream();
    }
  }

  private _updateStream(): void {
    for (let key in this._tree) {
      const hasIndex = this._list.findIndex(item => item.identifier === key);

      if (hasIndex) {
        this._list[hasIndex] = this._tree[key];
      }
    }
  }
}