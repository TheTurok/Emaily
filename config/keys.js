// keys.js - figure out what set of cred to return
if (process.env.NODE_ENV === 'production'){
  //we are in production
  module.exports = require('./prod');
}
else{
  //in dev return def keys
  module.exports = require('./dev');
}
