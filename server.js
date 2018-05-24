const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const configKeys = require('./config/keys');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = Promise;
mongoose.connect(configKeys.dburl);

const app = express();
const port = process.env.PORT || 5000;

const User = require('./model/userManagement').User;

const LdapAuth = require('./ldap/passport');

const sessionMiddleWare = session({
    secret: configKeys.sessionSecret,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: true,
    saveUninitialized: true,
    unset: 'destroy',
    cookie: {
        httpOnly: false,
        maxAge: 1000 * 3600 * 24,
        secure: false, // this need to be false if https is not used. Otherwise, cookie will not be sent.
    }
});

// The order of the following middleware is very important!!
app.use(bodyParser.json());
app.use(sessionMiddleWare);

// use the ldap/passport.js file
LdapAuth.init(configKeys.ldap.dn, configKeys.ldap.url, app,
    (id) => User.findOne({ uid: id }).exec(),
    (user) => User.findOneAndUpdate({ uid: user.uid }, user, { upsert: true, new: true }).exec()
);

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

// serve static pages
app.use(express.static('public'));

app.listen(port, () => console.log(`Listening on port ${port}`));