import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginLeftComponent } from './login-left/login-left.component';
import { LoginRightComponent } from './login-right/login-right.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginLeftComponent,
    LoginRightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
