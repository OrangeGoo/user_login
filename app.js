const express = require('express');
// const mysql = require('mysql');
// const dotenv = require('dotenv');
const path = require('path');
// dotenv.config({ path: './.env' });
const app = express();

// const db = mysql.createConnection({
//   host: 'oh-database.ct1sms0qsen3.us-east-1.rds.amazonaws.com',
//   user: 'admin',
//   password: 'CloudMonkeys',
//   database: 'oh_user_db'
// });


// db.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('MySQL Connected...');
//   }
// });

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'hbs');

// app.get('/', (req, res) => {
//   // res.send('<h1>HomePage</h1>');
//   res.render('index');
// });

// app.get('/register', (req, res) => {
//   // res.send('<h1>HomePage</h1>');
//   res.render('register');
// });

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});