var button = document.querySelector('button');

var obs1 = Rx.Observable.fromEvent(button, 'click');
var obs2 = Rx.Observable.interval(1000);

// Uncomment below to see ur console go nuts widout switch map
// obs1.subscribe(() => obs2.subscribe(value => console.log(value)));

obs1.switchMap(() => obs2).subscribe(value => console.log(value));
