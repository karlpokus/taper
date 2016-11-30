var taper = require('./taper'),
    lib = require('./lib');

taper('test 1', function(t){
  t.ok(lib.returnTrue); // no name
  t.notOk(null, 'null')
  t.equal(lib.return4(), 4, 'lib.return4');
  t.pass('just a pass');
  t.end();
});

taper(function(t){ // no name
  t.equal(typeof lib.returnFn(), 'function', 'lib.returnFn');
  t.ok('foo', 'foo is ok');
  t.pass(); // no name
  t.end();
});