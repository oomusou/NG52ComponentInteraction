import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CounterComponent } from './component/counter/counter.component';
import { CounterService } from './service/counter.service';
import { InitialCounterInterface } from './interface/initial-counter.interface';
import { ChangeCounterInterface } from './interface/change-counter.interface';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CounterService,
    {provide: InitialCounterInterface, useExisting: CounterService},
    {provide: ChangeCounterInterface, useExisting: CounterService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
