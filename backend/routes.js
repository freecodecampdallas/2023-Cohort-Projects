const express = require('express');
const router = express.Router();
const User = require('./models/userModel.js');
const { createUser,login } = require('./controllers/userController.js');



router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/login', login);

module.exports = router;

/** SAMPLE ROUTES
 * a route like this would fire when going to /api/recipes because /api/ is defined as the route precursor in server.js 
 * 
 * GET all recipes
 * router.get('/', (res, req) => {
 *      res.json();
 * });
 * 
 * GET one recipe
 * router.get('/:id', (res, req) => {
 *      res.json();
 * })
 */




