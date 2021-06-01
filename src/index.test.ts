import * as bt from 'baretest';
import * as assert from 'assert';
import { forEach, pipe, take } from 'callbag-basics';
import interval from './index';

const test = bt('interval immediate');

test('should emit immediately', async () => {
  return new Promise(resolve => {
    const values = [];
    pipe(
      interval(1), // milliseconds
      take(2), // take only to values 0, 1
      forEach(value => {
        values.push(value);
        if (values.length > 2) {
          // 0 synchronous value
          // 999 added manually after interval
          // 1 added at next tick
          // expect(values).toEqual([0, 999, 1]);
          assert.deepStrictEqual(values, [0, 999, 1]);
          resolve(undefined);
        }
      })
    );
    values.push(999);
  });
});

test.run();
