var input = document.querySelector('input');

var observable = Rx.Observable.fromEvent(input, 'input');

observable
  .map(event => event.target.value)
  .debounceTime(2000)
  .distinctUntilChanged()
  .subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed'),
    error: error => console.log(error)
  });
