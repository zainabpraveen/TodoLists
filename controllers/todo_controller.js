const Todo= require('../models/todo');
module.exports.home=function(req, res){

    return res.render('home',{
     title : "Home"
      
    });
};

module.exports.getList=function(req,res){
    // console.log(req);
 
    Todo.find({},function(err,todos){
     if(err){
       console.log('Error in fetching todo from db');
       return;
     }
     return res.render('home',{
       title: "Todo List",
       todo_list: todos
     });
    });
 };


 module.exports.create= function(req, res){
    Todo.create({
        comment: req.body.comment,
        category: req.body.category,
        date: req.body.date
     }, function(err, newTodo){
        if(err){
           console.log('error in creating a todo');
           return;
        }
      console.log('*******',newTodo);
      return res.redirect('back');
     });
 }
 
 
 module.exports.delete=function(req, res){
   let id= req.body.checkbox;
    Todo.findByIdAndDelete(id, function(err){
      if(err){
         console.log('error in deleting an object from database');
         return;
      }
      return res.redirect('back');
    });
   
   };