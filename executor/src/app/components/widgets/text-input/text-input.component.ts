import { Component, Input, OnInit } from '@angular/core';
import { WidgetTypeEnum } from 'src/app/enums/widget-type';
import { IUpdateChangesCallback } from 'src/app/interfaces/update-changes-callback';
import { IUpdateChangesClick } from 'src/app/interfaces/update-changes-click';
import { BehaviorService } from 'src/app/services/behavior.service';
import { TWidgetTextInput } from 'src/app/types/widget-text-input';

@Component({
  selector: 'widget-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class WidgetTextInput implements IUpdateChangesCallback, IUpdateChangesClick {
  @Input() item: TWidgetTextInput = {
    identifier: '',
    text: '',
    placeholder: '',
    callback: '',
    click: '',
    type: WidgetTypeEnum.textInput
  };

  constructor(private behaviorService: BehaviorService) {}

  public updateChangesCallback(): void {
      this.behaviorService.updateChangesCallback(this.item);
  }

  public updateChangesClick(): void {
    this.behaviorService.updateChangesClick(this.item);
  }
}
