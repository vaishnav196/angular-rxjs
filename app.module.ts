import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NewtaskComponent } from './newtask/newtask.component';
import { ShowtaskComponent } from './showtask/showtask.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import {MatToolbarModule} from '@angular/material/toolbar';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';



@NgModule({
  declarations: [
    AppComponent,
    NewtaskComponent,
    ShowtaskComponent,
    UnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatButtonModule,FormsModule,FormsModule, MatFormFieldModule, MatInputModule,MatToolbarModule, MatButtonModule, MatIconModule
  ],
  
  providers: [],
  bootstrap: [AppComponent,MatCardModule,FormsModule,MatFormFieldModule,MatInputModule]
})
export class AppModule { }
