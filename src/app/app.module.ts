import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
	routeComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
	ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
