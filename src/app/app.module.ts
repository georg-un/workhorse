import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { ListPageModule } from './pages/list/list.page.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    LayoutModule,
    ListPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
