const names = require(".");
const assert = require("assert");

assert.deepStrictEqual(names.aliceblue, {
  hex: "F0F8FF",
  dec: [240, 248, 255],
});
assert.deepStrictEqual(names.lightgreen, {
  hex: "90EE90",
  dec: [144, 238, 144],
});
assert.deepStrictEqual(names.yellowgreen, {
  hex: "9ACD32",
  dec: [154, 205, 50],
});
assert.deepStrictEqual(names.red, { hex: "FF0000", dec: [255, 0, 0] });
assert.deepStrictEqual(names.lime, { hex: "00FF00", dec: [0, 255, 0] });
assert.deepStrictEqual(names.blue, { hex: "0000FF", dec: [0, 0, 255] });
