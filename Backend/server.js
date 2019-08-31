const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');
const session        = require('express-session')

require('./db/db');


app.use(session({
  secret: 'keep it secret',
  resave: false,
  saveUninitialized: false
}));

// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// CORS allows requests to come in from React
app.use(cors({
  credential: true,
  origin: "http://localhost:3000"
}));

// app.use((req, res, next) => {
//   console.log('this is req.session.userId', req.session.userId)
//   next();
// })

// Require the controller after the middleware
const ExerciseController = require('./controllers/exerciseController');
const UserController  = require('./controllers/userController');

app.use('/api/v1/exercises', ExerciseController);
app.use('/user', UserController);

app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});