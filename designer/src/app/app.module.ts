import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WidgetsService } from './services/widgets.service';
import { JsContentService } from './services/js-content.service';
import { WidgetsConfigurationService } from './services/widgets-configuration.service';

import { AppComponent } from './app.component';

import { WidgetTextInput } from './components/widgets/text-input/text-input.component';
import { WidgetButton } from './components/widgets/button/button.component';
import { WidgetImage } from './components/widgets/image/image.component';


@NgModule({
  declarations: [
    AppComponent,
    WidgetTextInput,
    WidgetButton,
    WidgetImage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    WidgetsService,
    WidgetsConfigurationService,
    JsContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
