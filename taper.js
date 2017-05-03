var allTestData = [];

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

// almostEqual
Test.prototype.almostEqual = function(x, y, name) {
  this.data.push({
    v: (x == y)? 'ok': 'not ok',
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

// throws
Test.prototype.throws = function(fn, regex, name) {
  var wat = Object.prototype.toString,
      v;
  
  try {
    fn();
    v = 'not ok';
    
  } catch(e) {
    v = wat.call(regex) === "[object RegExp]" && regex.test(e.message)? 'ok': 'not ok';
  }
  
  this.data.push({
    v: v,
    name: setName(name)
  });
}

// printer
function printer(data) {
  console.log('\n# ' + data.name);
  data.data.forEach(function(o){
    console.log(o.v, o.name);
  });
}

// counter
function calcSummary(data) {
  function filterByValue(v, obj) {
    return obj.v === v;
  }
  
  return data
    .map(function(obj){
      return obj.data;
    })
    .reduce(function(acc, arr){
      acc.pass += arr.filter(filterByValue.bind(null, 'ok')).length;
      acc.fail += arr.filter(filterByValue.bind(null, 'not ok')).length;
      
      return acc;
    }, {pass: 0, fail: 0});
}

// summary
function summary() {
  allTestData.forEach(printer);
  
  // total hack. Have to stop now.
  var sum = calcSummary(allTestData);
  console.log('\n# summary');
  console.log('pass', sum.pass);
  console.log('fail', sum.fail);
}

// end
Test.prototype.end = function() {
  allTestData.push({
    data: this.data,
    name: this.name
  });
}

// beforeExit allows async, exit does not
process.on('beforeExit', summary);

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