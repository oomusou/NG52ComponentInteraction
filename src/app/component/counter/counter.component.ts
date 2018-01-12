import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() initialCounter;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();
  private counter: number;

  ngOnInit(): void {
    this.counter = this.initialCounter;
  }

  onAdd1Click() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

  onMinus1Click() {
    this.counter--;
    this.counterChange.emit(this.counter);
  }
}
