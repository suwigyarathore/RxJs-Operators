var clickEmitted = new Rx.BehaviorSubject('Not Clicked');
var button = document.querySelector('button');
var div = document.querySelector('div');

button.addEventListener('click', () => clickEmitted.next('Clicked!'));

clickEmitted.subscribe(
  (value) => div.textContent = value
);
