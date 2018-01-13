import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { InitialCounterInterface } from '../../interface/initial-counter.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() initialCounter;
  counter$: Observable<number> = this.counterService.counter$;

  constructor(private counterService: InitialCounterInterface) {
  }

  ngOnInit(): void {
    this.counterService.setInitialCounter(this.initialCounter);
  }
}
