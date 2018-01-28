var observable = Rx.Observable.of(1, 2, 3, 4, 5);

observable
  .reduce((tot, cur) => tot + cur, 0)
  .subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed'),
    error: (error) => console.log(error)
  });

observable
  .scan((tot, cur) => tot + cur, 0)
  .subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed'),
    error: (error) => console.log(error)
  })
