import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {MenubarModule} from 'primeng/menubar';
import {SplitterModule} from 'primeng/splitter';
import {CardModule} from 'primeng/card';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CarouselModule,
    MenubarModule,
    SplitterModule,
    HttpClientModule,
    CardModule,
    InputTextareaModule,
    FormsModule,
    MessageModule,
    ToastModule,
    MessagesModule,
    ConfirmDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
