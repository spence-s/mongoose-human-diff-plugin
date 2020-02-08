const test = require('ava');

const mongooseHumanObjectDiff = require('..');

test('exports a function', t => {
  t.true(typeof mongooseHumanObjectDiff === 'function');
});
