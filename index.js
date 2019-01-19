const express = require ('express');
const mongoose = require('mongoose');

const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys'); //getting the keys

//models
require('./models/User');
require('./models/Survey');

require('./services/passport'); //running passport


mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(  //COOKIE IS THE SESSION
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); //google authentication
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production'){
  //express will serve up production assests
  app.use(express.static('client/build'));

  //run index.html fils if it doesn't know the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000
app.listen(PORT);
