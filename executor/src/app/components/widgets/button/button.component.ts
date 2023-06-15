import { Component, Input } from '@angular/core';
import { WidgetTypeEnum } from 'src/app/enums/widget-type';
import { BehaviorService } from 'src/app/services/behavior.service';
import { TWidgetButton } from 'src/app/types/widget-button';
import { IUpdateChangesClick } from 'src/app/interfaces/update-changes-click';

@Component({
  selector: 'widget-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class WidgetButton implements IUpdateChangesClick {
  @Input() item: TWidgetButton = {
    identifier: '',
    bgColor: '',
    text: '',
    click: '',
    type: WidgetTypeEnum.button,
  }

  constructor(private behaviorService: BehaviorService) {}

  public updateChangesClick(): void {
      this.behaviorService.updateChangesClick(this.item);
  }
}
