var button = document.querySelector('button');

var observer = {
  next: value => console.log(value),
  complete: () => console.log('Completed'),
  error: (error) => console.log(error)
}

// Observable from scratch
Rx.Observable.create((obs) => {
  obs.next('first value');
  obs.next('Second value');
  setTimeout(() => obs.complete(), 2000)
})
  .subscribe(observer);

//Observable from scratch for button click
var subscription = Rx.Observable.create((obs) => {
  button.addEventListener('click', (event) => obs.next(event.clientX));
})
  .subscribe(observer);

// After 5 seconds subscription will be unsubscribed so no more listening
setTimeout(() => subscription.unsubscribe(), 5000);
