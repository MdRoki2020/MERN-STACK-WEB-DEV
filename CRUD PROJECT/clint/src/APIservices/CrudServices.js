import Axios from 'axios';

export function Create(ProductName,ProductCode,Img,UnitPrice,Qty,TotalPrice){

    let URL="http://localhost:5000/api/v1/CreateProduct"

    let PostBody={
        ProductName:ProductName,
        ProductCode:ProductCode,
        Img:Img,
        UnitPrice:UnitPrice,
        Qty:Qty,
        TotalPrice:TotalPrice
    }
    return Axios.post(URL,PostBody).then((res)=>{
        if(res.status===200){
            return true;
        }else{
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false;
    })
}


export function Read(){
    let URL="api/v1/ReadProduct"
    return Axios.get(URL).then((res)=>{

        if(res.status===200){
            return res.data['data'];
        }else{
            return false
        }

    }).catch((err)=>{
        return false
    })
}



export function Update(id){
    let URL="api/v1/UpdateProduct/"+id;

    // let PostBody={
    //     ProductName:ProductName,
    //     ProductCode:ProductCode,
    //     Img:Img,
    //     UnitPrice:UnitPrice,
    //     Qty:Qty,
    //     TotalPrice:TotalPrice
    // }

    return Axios.post(URL,).then((res)=>{
        if(res.status===200){
            return true;
        }else{
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false;
    })
}


export function Delete(id){
    let URL="api/v1/DeleteProduct/"+id;
    return Axios.get(URL).then((res)=>{

        if(res.status===200){
            return res.data['data'];
        }else{
            return false
        }

    }).catch((err)=>{
        console.log(err);
        return false;
    })
}