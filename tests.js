var taper = require('./taper'),
    lib = require('./lib');

taper('test 1', function(t){
  t.ok(lib.returnSomething(true)); // no name
  t.notOk(null, 'null is not ok')
  t.equal(lib.returnSomething(4), 4, 'it is 4');
  t.pass('just a pass');
  t.end();
});

taper(function(t){ // no name
  t.equal(typeof lib.returnSomething(function(){}), 'function', 'it is a fn');
  t.ok('foo', 'foo is ok');
  t.pass(); // no name
  t.throws(lib.goBang, /BANG/, 'goBang throws');
  t.end();
});