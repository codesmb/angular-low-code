import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WidgetDefaultConfiguration } from '../widget-default-configuration';
import { WidgetTypeEnum } from '../enum';
import { TWidgetImage } from './type';

@Component({
  selector: 'widget-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class WidgetImage {
  @Input() isDisabled: boolean = false;
  @Input() item: TWidgetImage = WidgetDefaultConfiguration.getConfiguration(WidgetTypeEnum.image) as TWidgetImage;
  @Output() itemChange = new EventEmitter<WidgetImage>();
}
