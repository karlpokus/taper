# taper
A silly clone of the awesome testing tool [tape](https://github.com/substack/tape) by substack. No dependencies. Just a poor man's clone without all the stream shenanigans >_<

# usage
```javascript
var test = require('./taper'),
    lib = require('./lib');

test('test A', function(t){
  t.equal(lib.fn(), true, 'lib.fn'); // Assume lib.fn returns true
  t.notOk(false);
  t.end(); // required
});

// logs
// # test A
// ok lib.fn
// ok anonymous
```

# api
Note: `name` is always optional
### test([name,] cb)
Start a new testblock. Optionally give it a name. `cb` will be called with a test object with the methods below.
### t.ok(v [,name])
Assert `v` is truthy
### t.notOk(v [,name])
Assert `v` is falsy
### t.equal(x, y [,name])
Assert `x === y`
### t.almostEqual(x, y [,name])
Assert `x == y`
### t.pass([name])
Assert `true`
### t.throws(fn, regex [,name])
Assert that `regex` matches error message thrown by `fn`
### t.end()
**Required** Ends testblock and logs result.

# test
```bash
$ npm test
```

# todos
- [x] test summary
- [ ] error report
- [ ] handle async tests with pype?
- [ ] test as event emitter? `.onFinish`
- [ ] `plan`

# licence
MIT