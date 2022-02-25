"use strict";
var bench = require("fastbench");
var deepClone = require("../dist/index").default;
var obj = require("./fixture.json");

const max = 1000;

var run = bench([
  function benchDeepClone(cb) {
    for (var i = 0; i < max; i++) {
      deepClone(obj)
    }
    setImmediate(cb)
  },
  function benchJsonParseJsonStringify(cb) {
    for (var i = 0; i < max; i++) {
      JSON.parse(JSON.stringify(obj))
    }
    setImmediate(cb)
  },
], 100)

run(run)
