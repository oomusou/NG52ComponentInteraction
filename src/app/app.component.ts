import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialCounter = 3;
  counter: number = this.initialCounter;

  onCounterChange(counter: number) {
    this.counter = counter;
  }
}
