const ProductsModel=require('../models/ProductsModel');


//create
exports.CreateProduct=(req,res)=>{
    let reqBody=req.body;

    ProductsModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


//read
exports.ReadProduct=(req,res)=>{

    let Query={}
    let Projection="ProductName ProductCode Img UnitPrice Qty TotalPrice "
    ProductsModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })

}



//update
exports.UpdateProduct=(req,res)=>{

    let id=req.params.id;
    let Query={_id:id}
    let reqBody=req.body;

    ProductsModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })

}



//delete
exports.DeleteProduct=(req,res)=>{

    let id=req.params.id;
    let Query={_id:id}

    ProductsModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })

}
