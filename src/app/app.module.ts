import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalInformationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
