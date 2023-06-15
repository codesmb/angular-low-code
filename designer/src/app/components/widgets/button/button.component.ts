import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WidgetDefaultConfiguration } from '../widget-default-configuration';
import { WidgetTypeEnum } from '../enum';
import { TWidgetButton } from './type';

@Component({
  selector: 'widget-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class WidgetButton {
  @Input() isDisabled: boolean = false;
  @Input() item: TWidgetButton = WidgetDefaultConfiguration.getConfiguration(WidgetTypeEnum.button) as TWidgetButton;
  @Output() itemChange = new EventEmitter<TWidgetButton>();
}
