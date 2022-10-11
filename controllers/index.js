var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yakshi Gandhi' });
});

/* GET /about */
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me'
  })
} )

/* GET /projects */
router.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'Projects'
  })
} )

/* GET /contact */
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Me'
  })
} )

module.exports = router;
