/* TODO: Remove all the dependencies */
import { interval, map, pipe, merge, forEach } from "callbag-basics";
import * as of from "callbag-of";

export default function intervalImmediate(intervalMs) {
  let count = 0;
  return pipe(
    merge(of(0), interval(intervalMs)),
    map(() => count++)
  );
}
