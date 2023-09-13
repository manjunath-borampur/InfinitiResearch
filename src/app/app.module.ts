import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, POSITION, SPINNER } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
bgsColor: "rgba(12,80,219,0.98)",
bgsOpacity: 1,
bgsPosition: POSITION.bottomRight,
bgsSize: 40,
bgsType: SPINNER.threeStrings,
fgsColor: "rgba(12,80,219,0.98)",
fgsPosition: POSITION.centerCenter
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxUiLoaderRouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
