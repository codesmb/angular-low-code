import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { ERROR_MSG, IMPORT_FILE_PATH } from '../config/config';
import { TWidget } from '../types/widget';
import { TInputConfiguration } from '../types/input-configuration';

@Injectable()
export class ConfigurationService {
  private _items: TWidget[] = [];

  constructor(private http: HttpClient) { 
  }

  public get items(): TWidget[] {
    return this._items;
  }

  public async init(): Promise<void> {
    try {
      const data: TInputConfiguration = await this._getJsonAsync();
      if (data.items && data.items.length) {
        this._items = data.items;
      } else {
        alert(ERROR_MSG.dataItemsInJson);
      }
    } catch (err) {
      console.error(err);
      alert(ERROR_MSG.wrongLoadJson);
    }
  }

  private _getJsonAsync(): Promise<any> {
    return firstValueFrom(
      this.http.get(IMPORT_FILE_PATH)
    );
  }
}
