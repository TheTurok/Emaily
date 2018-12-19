const express = require ('express');
const mongoose = require('mongoose');

const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys'); //getting the keys
require('./models/User');
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


const PORT = process.env.PORT || 5000
app.listen(PORT);
