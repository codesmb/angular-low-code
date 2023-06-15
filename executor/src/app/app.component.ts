import { Component } from '@angular/core';
import { ConfigurationService } from './services/configuration.service';
import { WidgetTypeEnum } from './enums/widget-type';
import { BehaviorService } from './services/behavior.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public WIDGET_TYPE_ENUM = WidgetTypeEnum;

  constructor(public behaviorService: BehaviorService) {
    
  }

}
