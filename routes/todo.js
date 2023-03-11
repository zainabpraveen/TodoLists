const express= require('express');

const router=express.Router();
 const todoController=require('../controllers/todo_controller');
console.log('router loaded');

// router.get('/',todoController.getList);
router.post('/create-todo',todoController.create);
router.post('/delete-todo',todoController.delete);

module.exports = router;