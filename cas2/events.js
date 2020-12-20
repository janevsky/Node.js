let events = require('events');
let emitter = new events.EventEmitter();

// PUBLISH/SUBSCRIBE

emitter.on('customer_register', eventData => {
  // isprati email do ovoj
  console.log('isprati email do ovoj', eventData);
  // isprati email do onoj
  console.log('isprati email do onoj');
})

emitter.emit('customer_register', {
  message: 'Customer successfully registered'
})
