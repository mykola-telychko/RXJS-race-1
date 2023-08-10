import { mapTo } from 'rxjs/operators';
import { interval, race } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/combination/race

function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// old
// interval(1500),
// interval(1000).pipe(mapTo('1s won!')),
// interval(2000),
// interval(2500)

//take the first observable to emit
const src = race(
  interval(2500).pipe(mapTo('2s won!')),
  interval(1500).pipe(mapTo('1s won!'))
);

// interval(5000),
// interval(3500)
//output: "1s won!"..."1s won!"...etc
const subscribe = src.subscribe((val) => console.log(val));
