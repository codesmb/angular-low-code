import { Component, Input, OnInit } from '@angular/core';
import { WidgetTypeEnum } from 'src/app/enums/widget-type';
import { IUpdateChangesClick } from 'src/app/interfaces/update-changes-click';
import { BehaviorService } from 'src/app/services/behavior.service';
import { TWidgetImage } from 'src/app/types/widget-image';

@Component({
  selector: 'widget-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class WidgetImage implements IUpdateChangesClick {
  @Input() item: TWidgetImage = {
    identifier: '',
    src: '',
    click: '',
    type: WidgetTypeEnum.image,
  }

  constructor(private behaviorService: BehaviorService) {}

  public updateChangesClick(): void {
      this.behaviorService.updateChangesClick(this.item);
  }
}
