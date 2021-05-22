import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './pages/article-list/article-list.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
	routeComponents,
	ArticleListComponent
  ],
  imports: [
    BrowserModule,
	CommonModule,
	BrowserAnimationsModule,
	RouterModule,
	
	AppRoutingModule
  ],
  providers: [DatePipe],
  exports: [ routeComponents, ArticleListComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
