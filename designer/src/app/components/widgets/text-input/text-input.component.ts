import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WidgetDefaultConfiguration } from '../widget-default-configuration';
import { WidgetTypeEnum } from '../enum';
import { TWidgetTextInput } from './type';

@Component({
  selector: 'widget-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class WidgetTextInput {
  @Input() isDisabled: boolean = false;
  @Input() item: TWidgetTextInput = WidgetDefaultConfiguration.getConfiguration(WidgetTypeEnum.textInput) as TWidgetTextInput;
  @Output() itemChange = new EventEmitter<TWidgetTextInput>();
}
