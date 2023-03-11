const express= require('express');

const router=express.Router();
const homeController= require('../controllers/todo_controller');

console.log('router loaded');

router.get('/',homeController.getList);
router.use('/todo',require('./todo'));




module.exports = router;