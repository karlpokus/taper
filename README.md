# taper
A silly clone of the awesome testing tool [tape](https://github.com/substack/tape) by substack. No dependencies. Just a poor man's clone without all the stream shenanigans >_<

# usage
```javascript
var test = require('./taper'),
    lib = require('./lib');

test('test A', function(t){
  t.equal(lib.fn(), true, 'lib.fn'); // Assume lib.fn returns true
  t.end(); // required
});
```

# api
`name` is optional
### t.ok(v [,name])
Assert `v` is truthy
### t.notOk(v [,name])
Assert `v` is falsy
### t.equal(x, y [,name])
Assert `x === y`
### t.pass([name])
Assert `true`
### t.end()
`Required` Ends testblock and logs result.

# test
```bash
$ npm test
```

# todos
- [ ] test summary

# licence
MIT