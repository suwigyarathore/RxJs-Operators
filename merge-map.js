var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');

var span = document.querySelector('span');

var obs1 = Rx.Observable.fromEvent(input1, 'input')
  .pluck('target', 'value');

var obs2 = Rx.Observable.fromEvent(input2, 'input')
  .pluck('target', 'value');

obs1.mergeMap(val1 => obs2.map((val2) => val1 + ' ' + val2))
  .subscribe(combinedValue => span.textContent = combinedValue);
