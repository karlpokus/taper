function Test(name) {
  this.name = name;
  this.data = []; // v: ok || not ok, name: string
}

function setName(name) {
  return name || 'anonymous';
}

// ok
Test.prototype.ok = function(v, name) {
  this.data.push({
    v: (v)? 'ok': 'not ok',
    name: setName(name)
  });
}

// notOk
Test.prototype.notOk = function(v, name) {
  this.data.push({
    v: (!v)? 'ok': 'not ok',
    name: setName(name)
  });
}

// equal
Test.prototype.equal = function(x, y, name) {
  this.data.push({
    v: (x === y)? 'ok': 'not ok',
    name: setName(name)
  });
}

// pass
Test.prototype.pass = function(name) {
  this.data.push({
    v: 'ok',
    name: setName(name)
  });
}

// end
Test.prototype.end = function() {
  console.log('\n# ' + this.name);
  this.data.forEach(function(o){
    console.log(o.v, o.name);
  });
}

module.exports = function(name, cb) {
  if (name && !cb) {
    cb = name;
    name = setName();
  }
  if (typeof cb === 'function') {
    var t = new Test(name);
    cb(t);
  }
}