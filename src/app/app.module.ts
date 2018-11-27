import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {BashService} from './bash.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BashComponent } from './bash/bash.component';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BashComponent,
    ResultComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [BashService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
