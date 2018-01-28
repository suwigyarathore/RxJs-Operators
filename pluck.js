var input = document.querySelector('input');

var observable = Rx.Observable.fromEvent(input, 'input');

observable
  .pluck('target', 'value')
  .debounceTime(500)
  .distinctUntilChanged()
  .subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed'),
    error: error => console.log(error)
  });
