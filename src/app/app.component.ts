import { Component } from '@angular/core';
import { ChangeCounterInterface } from './interface/change-counter.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialCounter = 3;

  constructor(private counterService: ChangeCounterInterface) {
  }

  onAdd1Click() {
    this.counterService.add1();
  }

  onMinus1Click() {
    this.counterService.minus1();
  }
}
