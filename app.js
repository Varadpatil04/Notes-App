require('dotenv').config();

const express = require('express');
const expresslayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const connectDB = require('./server/config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const app = express();
const port = 3000 || process.env.PORT;

const cook = 30*60*24*60*1000; // 60 days in milliseconds

app.use(session({
    secret: 'somevalue',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    cookie: { maxage: new Date(Date.now() + (cook))} 
}));
app.use(passport.initialize());   //Allow Auth
app.use(passport.session());    // Restore Login Session

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(methodOverride("_method"));

// db connected
connectDB();
//Static
app.use('/public', express.static('public'));

app.use(expresslayouts);
app.set('layout', './layouts/main')
app.set('view engine', 'ejs');



//Routes
app.use('/', require('./server/routes/index'))
app.use('/', require('./server/routes/dashboard'))
app.use('/', require('./server/routes/auth'))

//Error 
app.get('*', (req, res) => {
    res.status(404).render("404")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
