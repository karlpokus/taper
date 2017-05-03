var taper = require('./taper'),
    lib = require('./lib');

taper('Complete API test', function(t){
  t.ok(lib.returnSomething(true), '.ok');
  t.notOk(null, '.notOk')
  t.equal(lib.returnSomething(4), 4, '.equal');
  t.almostEqual(lib.returnSomething(5), "5", '.almostEqual')
  t.throws(lib.goBang, /BANG/, '.throws');
  t.pass('.pass');
  t.end();
});

taper(function(t){ // no name
  t.pass('taper called anonymously');
  t.end();
});