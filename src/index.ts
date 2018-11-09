/* TODO: Remove all the dependencies */
import { interval, map, pipe, merge, fromIter } from "callbag-basics";

export default function intervalImmediate(intervalMs) {
  let count = 0;
  return pipe(
    merge(fromIter([0]), interval(intervalMs)),
    map(() => count++)
  );
}
