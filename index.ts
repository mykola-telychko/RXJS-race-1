import { mapTo } from 'rxjs/operators';
import { interval, race } from 'rxjs';

/**
 * Generates a random integer within the given range.
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (inclusive).
 * @returns {number} A random integer between min and max.
 */
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Creates a race condition between two interval observables.
 * The first observable to emit wins.
 */
const src = race(
  interval(getRandInt(1500, 3000)).pipe(mapTo('2s won!')),
  interval(getRandInt(1000, 2000)).pipe(mapTo('1s won!'))
);

/**
 * Subscribes to the race observable and logs the winning value.
 */
const subscribe = src.subscribe((val) => console.log(val));
