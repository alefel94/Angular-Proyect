import { Component, ChangeDetectionStrategy } from "@angular/core";
import { signal } from "@angular/core";

@Component({
    templateUrl: './rest-counter.component.html',
    styleUrls: ['./rest-counter.component.css'],

    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RestCounter {
    counter = 10;
    counterSignal = signal(10);

//Se utiliza el constructor para las ordenes de señales directas
    constructor() {
      // setInterval(() => {
      // this.counter += 1;
      //   this.counterSignal.update((v) => v + 1);
      //   console.log('Tick');
      // }, 2000);
    }

    increaseBy(value: number) {
        this.counter += value;
        this.counterSignal.update((currentValue) => currentValue + value);
    }

    decreaseBy(value: number) {
        this.counter -= value;
        this.counterSignal.update((currentValue) => currentValue - value);
    }

    resetCounter() {
        this.counter = 0;
        this.counterSignal.set(0);

    }
}
