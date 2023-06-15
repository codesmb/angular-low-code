import { Injectable } from '@angular/core';
import { TWidget } from '../types/widget';
import { WidgetDefaultConfiguration } from '../components/widgets/widget-default-configuration';
import { WidgetTypeEnum } from '../components/widgets/enum';

@Injectable()
export class WidgetsService {
  private _list: TWidget[] = [];

  constructor() { }

  public get widgets(): TWidget[] {
    return [...this._list];
  };

  public add(type: WidgetTypeEnum): void {
    const configuration = WidgetDefaultConfiguration.getConfiguration(type);

    if (configuration) {
      const newItem = {
        id: this._getUnuqueId(),
        type: type,
        configuration: configuration,
      };

      this._list.push(newItem);
    }
  }

  public remove(id: number): void {
    const index = this._list.findIndex(item => item.id === id);

    if (index !== -1) {
      this._list.splice(index, 1);
    }
  }

  public clear(): void {
    this._list = [];
  }

  private _getUnuqueId(): number {
    return new Date().getTime();
  }
}
