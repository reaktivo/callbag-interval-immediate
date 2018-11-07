import { forEach, pipe, take } from "callbag-basics";
import interval from "./index";

describe("interval immediate", () => {
  it("should emit immediately", done => {
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
          expect(values).toEqual([0, 999, 1]);
          done();
        }
      })
    );
    values.push(999);
  });
});
