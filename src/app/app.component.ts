import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CounterComponent } from './component/counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(CounterComponent) counterComponent: CounterComponent;
  initialCounter = 3;

  ngAfterViewInit(): void {
    console.log(this.counterComponent.counter);
  }

  onAdd1Click() {
    this.counterComponent.add1();
  }

  onMinus1Click() {
    this.counterComponent.minus1();
  }
}
