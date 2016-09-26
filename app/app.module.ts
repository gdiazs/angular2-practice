import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent }  from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import {routes} from './app.routes';

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(routes) , SharedModule, HomeModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
})
export class AppModule { }
