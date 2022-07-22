var MongoClient=require('mongodb').MongoClient;
var URL="mongodb://127.0.0.1:27017/"
var config={useUnifiedTopology:true};

MongoClient.connect(URL,config,(error,MyMongoClient)=>{
    if(error){
        console.log("connection fail")
    }else{
        console.log("Connection successfull");

        // InsertData(MyMongoClient);
        // DeleteOneItem(MyMongoClient);
        // DeleleAllItem(MyMongoClient)
        // FindOneWithoutCondition(MyMongoClient);
        // FindOneWithCondition(MyMongoClient)
        // FindAllData(MyMongoClient)
        // FindAllDataByProjection(MyMongoClient)
        // FindAllDataByQuery(MyMongoClient)
        // FindAllDataByLimit(MyMongoClient)
        // FindAllDataBySort(MyMongoClient)
        // UpdateMyData(MyMongoClient)
        // CreateMyCollection(MyMongoClient)
        DeleteMyCollection(MyMongoClient)
    }
})


//insert data
// const InsertData=(MyMongoClient)=>{
//     var MyDataBase=MyMongoClient.db("university");
//     var MyCollection=MyDataBase.collection('students');
//     var MyData={name:"Adhora",roll:"07",class:"ten",city:"dhaka"};
//     MyCollection.insertOne(MyData,(err)=>{
//         if(err){
//             console.log("Data insert Failed");
//         }else{
//             console.log("Data Insert Success");
//         }
//     })
// }


//delete data
// function DeleteOneItem(MyMongoClient) {
//     var MyDataBase= MyMongoClient.db("university");
//     var MyCollection= MyDataBase.collection('students');
//     var DeleteItem={roll:"02"}
//     MyCollection.deleteOne(DeleteItem,function (error) {
//         if(error){
//             console.log("Data Delete Fail");
//         }
//         else{
//             console.log("Data Delete Success");
//         }
//     });
// }


//delete all item
// function DeleleAllItem(MyMongoClient) {
//     var MyDataBase= MyMongoClient.db("university");
//     var MyCollection= MyDataBase.collection('students');
//     MyCollection.deleteMany(function (error,ResultObj){
//         if(error){
//             console.log("Delete Fail");
//         }
//         else {
//             console.log(ResultObj.result.n +" Item Deleted");
//         }
//     })
// }



// find one without condition
// function FindOneWithoutCondition(MyMongoClient) {
//     var MyDataBase= MyMongoClient.db("university");
//     var MyCollection= MyDataBase.collection('students');
//     var FindObj={}
//     MyCollection.findOne(FindObj,function (error,result) {
//         console.log(result);
//     })
// }


//find one with condition
// function FindOneWithCondition(MyMongoClient) {
//     var MyDataBase= MyMongoClient.db("university");
//     var MyCollection= MyDataBase.collection('students');
//     var FindObj={roll: "05"}
//     MyCollection.findOne(FindObj,function (error,result) {
//         console.log(result);
//     })
// }


//find all data
// function FindAllData(MyMongoClient) {
//     var MyDataBase= MyMongoClient.db("university");
//     var MyCollection= MyDataBase.collection('students');
//     MyCollection.find().toArray(function (error,result) {
//         console.log(result)
//     })
// }



// function FindAllDataByProjection(MyMongoClient) {
//     var MyDataBase= MyMongoClient.db("university");
//     var MyCollection= MyDataBase.collection('students');

//     var ItemObj={}
//     var ItemProjection={projection:{class:"",roll:""}}

//     MyCollection.find(ItemObj,ItemProjection).toArray(function (error,result) {
//         console.log(result)
//     })
// }


//find all data by query
// function FindAllDataByQuery(MyMongoClient) {
//     var MyDataBase= MyMongoClient.db("university");
//     var MyCollection= MyDataBase.collection('students');

//     var Query={roll :"01",city: "kishorgonj"}

//     MyCollection.find(Query).toArray(function (error,result) {
//         console.log(result)
//     })
// }


//find all data by limit
// function FindAllDataByLimit(MyMongoClient) {
//     var MyDataBase= MyMongoClient.db("university");
//     var MyCollection= MyDataBase.collection('students');

//     MyCollection.find().limit(5).toArray(function (error,result) {
//         console.log(result)
//     })
// }


//find all data by sort
// function FindAllDataBySort(MyMongoClient) {
//     var MyDataBase= MyMongoClient.db("university");
//     var MyCollection= MyDataBase.collection('students');

//     var SortPattern={Class :-1}

//     MyCollection.find().sort(SortPattern).toArray(function (error,result) {
//         console.log(result)
//     })
// }


//update data
// function UpdateMyData(MyMongoClient){
//     var MyDataBase= MyMongoClient.db("university");
//     var MyCollection= MyDataBase.collection('students');

//     var MyQuery={roll:"02"};
//     var MyNewValues={$set:{name:"Rabbil Hasan Rupom",city:"Gaibandha"}}

//     MyCollection.updateOne(MyQuery,MyNewValues,function (error,result) {
//         console.log(result);
//     })
// }



//create collection
// function CreateMyCollection(MyMongoClient){
//     var MyDataBase= MyMongoClient.db("university");
//     MyDataBase.createCollection("teachers",function (error,result) {
//         console.log(result);
//     })
// }


function DeleteMyCollection(MyMongoClient){
    var MyDataBase= MyMongoClient.db("university");

    MyDataBase.dropCollection("teachers",function (error,result) {
        console.log(result);
    })

}