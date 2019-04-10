import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormDemoComponent } from './form-demo/form-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    FormDemoComponent
  ],
  imports: [
     BrowserModule, 
     NgbModule,
    BrowserModule,
    FormsModule,  //Anche qui
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
