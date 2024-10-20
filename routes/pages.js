const express = require('express');
const router = express.Router();
const { loginMiddleware } = require('../controllers/loginMiddleware');


router.get('/', (req, res) => {
  res.render('index');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/student/home', loginMiddleware, (req, res) => {
  if (req.user.role !== 1) {
    return res.status(403).json({ message: 'Access denied for non-student users' });
  }
  res.json({ message: 'Welcome to student home' });
});

router.get('/teacher/home', loginMiddleware, (req, res) => {
  if (req.user.role !== 0) {
    return res.status(403).json({ message: 'Access denied for non-teacher users' });
  }
  res.json({ message: 'Welcome to teacher home' });
});

module.exports = router;