import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule } from "ngx-bootstrap/alert";
import { TabsModule } from "ngx-bootstrap/tabs";
import { TabWrapperComponent } from './tab-wrapper/tab-wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabsItemsDirective} from './tab-wrapper/directives/tab-items.directive';
import {TabItemDirective} from './tab-wrapper/directives/tab-item.directive';



@NgModule({
  declarations: [
    TabWrapperComponent,AppComponent,TabsItemsDirective,TabItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
