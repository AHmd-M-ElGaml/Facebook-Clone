import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftHomeComponent } from './left-home/left-home.component';
import { RightHomeComponent } from './right-home/right-home.component';
import { CenterHomeComponent } from './center-home/center-home.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    LeftHomeComponent,
    RightHomeComponent,
    CenterHomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


