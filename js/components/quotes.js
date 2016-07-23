var quotes = new Vue({
  el: '#quote-wall',
  data: {
    quotes: [
      { quote: 'FooFooFooFooFooFooFooFooFooFooFooFoo' },
      { quote: 'BarFooFooFooFooFooFooFooFooFooFooFooFooFoo' }, 
      { quote: 'BarFooFooFooFooFooFooFooFooFooFooFooFooFoo' }, 
    ]
  }
});

var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})