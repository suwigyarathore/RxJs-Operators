# RxJs-Operators

This projects depicts the most important operators of RXJS

## Way to learn

After cloning open **index.html** in any browser and keep on uncommenting the respective script file to go through chapter wise.

## Operators(file wise)

* **observer-observable-subs.js**: Here you will learn how to create observer from scratch and get emitted values form observable

* **map-throttle.js**: This file cover most important RXJS stream operator map to modify stream into new and throttleTime operator to ignore emitted values for specified time.

* **subject.js**: Subject is like observable but observable is kind of passive and you don't control when to emit for that we have subject, with subject we have all power of observable plus you emit whenever you want.

* **filter.js**: Well as name suggest filter is like a filter in array. You can filter out values plus advantage is it entact the streams.

* **debounce-distinctuntilchanged.js**: debounceTime is one of my favourite operator its very useful when yiu want to wait for user to make all chnages and then emit value after given time. It can be great in boosting performance. Other operator described in this file id distinctUntilChanged is cherry on cake, its actually checks that if last value is same a before it will not emit. But its only useful in primitive types for object types it compares the reference which is hardly same.

* **scan-reduce.js**: Reduce works exactly like Array.reduce but it keeps the stream intact. The only difference between reduce and scan is that scan prints athe accumulator value at each step whereas reduce prints finally. So if u know that your observable is going to get completed you can use reduce else scan is really handy.

* **pluck.js**: Pluck acts like a smarter way of getting values out of objects in streams and get stream of only that in funnel

* **merge-map.js**: Its a pretty handy & complicated operator at same time. It can be used when u want to merge to observable and get combined value. But its catch is you don't get any emitted value until inner observable emitted value.

* **switch-map.js**: I call this one of the masterpieces in rxjs operator.It switches from last stream to new stream and unsubscribe the last one.
