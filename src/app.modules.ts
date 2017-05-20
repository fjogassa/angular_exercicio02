import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HoraService } from './hora.service';
import { AppComponent } from './app.component';
import { AppComponentHoras } from './app.component.horas';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, AppComponentHoras],
  providers: [HoraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
