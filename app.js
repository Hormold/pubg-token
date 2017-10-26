var greenworks = require('greenworks'); // Tested with greenworks-0.10.0
if (!greenworks.initAPI()) {
  console.log('An error occured initializing Steam API.');
  process.exit(1);
}

function getKey(cb){
  greenworks.getAuthSessionTicket(function(a,b){
    if(a.ticket){
      const ticket = a.ticket.toString('hex');
      cb(null, ticket.toUpperCase());
    }
  }, function(error){
    cb(error, false);
  });
}


getKey((error, token) => {
  if(err) return console.log(`Error:   ${error}`);
  console.log(`Auth token is ${token}`);
});
