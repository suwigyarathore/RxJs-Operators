var subject = new Rx.Subject();

subject.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed'),
  error: (error) => console.log(error)
});

subject.subscribe({
  next: value => console.log(value)
});

subject.next('A new data piece');
//subject.error('A error');
subject.complete('completed');

