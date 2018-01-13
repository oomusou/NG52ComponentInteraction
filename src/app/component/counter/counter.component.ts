import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() initialCounter;
  counter: number;

  ngOnInit(): void {
    this.counter = this.initialCounter;
  }

  add1() {
    this.counter++;
  }

  minus1() {
    this.counter--;
  }
}
