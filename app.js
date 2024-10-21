const express = require('express');
const path = require('path');
const app = express();


app.use((req, res, next) => {
  const startTime = Date.now();
  console.log(`Incoming Request: Method=${req.method}, Path=${req.path}`);

  res.on('finish', () => {
    const duration = Date.now() - startTime;
    console.log(`Request Processed: Method=${req.method}, Path=${req.path}, Status=${res.statusCode}, Duration=${duration}ms`);
  });

  next();
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'hbs');

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});