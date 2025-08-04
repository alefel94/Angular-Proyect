import { Component } from "@angular/core";
import { signal } from "@angular/core";

@Component({
    templateUrl: './rest-counter.component.html',
    styleUrls: ['./rest-counter.component.css']
})

export class RestCounter {
    counter = 10;
    counterSignal = signal(10);

    increaseBy(value: number) {
        this.counter += value;
    }

    decreaseBy(value: number) {
        this.counter -= value;
    }

    resetCounter() {
        this.counter = 10;
        
    }
}
