var crudModel= require('../models/subscribers');

module.exports={
    subscriberForm:function(req,res){
         res.render('index')
    },
    createData:function(req, res){
        var inputData= req.body;
         crudModel.createData(inputData, function(data){
            res.render('index')
            console.log(" record was created");
         });
    },
    fetchData:function(req, res){
      
      crudModel.fetchData(function(data){
          res.render('table',{subscriberData:data}); 
      })
    },


    editData:function(req, res){
      var editId= req.params.id;
      crudModel.editData(editId,function(data){
        res.render('index',{subscriberData:data});
      })
    },
    updateData:function(req, res){
      var inputData= req.body;
      var editId= req.params.id;
      crudModel.updateData(inputData, editId,function(data){
         res.redirect('/subscriber/list')
         console.log(" record was updated");
      });
    },
    deleteData:function(req, res){
      
      var deleteId= req.params.id;
      crudModel.deleteData(deleteId,function(data){
         res.redirect('/subscriber/list')
         console.log(" record was deleted");
      });
    }

}
