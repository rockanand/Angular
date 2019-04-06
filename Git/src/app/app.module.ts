import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './Parent/child/child.component';

import {ReactiveFormsModule,FormsModule} from '@angular/forms'

import { NgSelectModule } from '@ng-select/ng-select';
import {MatInputModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,NgSelectModule,MatInputModule
  ],
  exports:[MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
