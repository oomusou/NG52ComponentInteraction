import { Observable } from 'rxjs/Observable';

export abstract class InitialCounterInterface {
  abstract counter$: Observable<number>;
  abstract setInitialCounter(initialCounter: any): void;
}
