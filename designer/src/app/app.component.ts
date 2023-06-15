import { Component } from '@angular/core';
import { WidgetsService } from './services/widgets.service';
import { WidgetsConfigurationService } from './services/widgets-configuration.service';
import { ALL_WIDGETS, ERRORS_TXT } from './configs/configs';
import { TWidget } from './types/widget';
import { WidgetTypeEnum } from './components/widgets/enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public WIDGET_TYPE_ENUM = WidgetTypeEnum;
  public accessWidgets = ALL_WIDGETS.filter(item => item.active);

  constructor(
    public widgetService: WidgetsService,
    public widgetsConfigurationService: WidgetsConfigurationService,
  ) {

  }

  public isDisabled(): boolean {
    return this.widgetsConfigurationService.isLoading;
  }

  public addWidget(type: WidgetTypeEnum): void {
    this.widgetService.add(type);
  }

  public removeWidget(id: number): void {
    this.widgetService.remove(id);
  }

  public checkError(widget: TWidget): boolean {
    widget.errorMsg = '';

    if (this.widgetService.widgets.find(item => item.id !== widget.id && item.configuration.identifier === widget.configuration.identifier)) {
      if (widget.configuration.identifier) {
        widget.errorMsg = ERRORS_TXT.widgetsSameIds;
        return true;
      }
    }

    return false;
  }
}
