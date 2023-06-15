import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConfigurationService } from './services/configuration.service';
import { WidgetTextInput } from './components/widgets/text-input/text-input.component';
import { BehaviorService } from './services/behavior.service';
import { WidgetImage } from './components/widgets/image/image.component';
import { WidgetButton } from './components/widgets/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetTextInput,
    WidgetImage,
    WidgetButton
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ConfigurationService,
    BehaviorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
