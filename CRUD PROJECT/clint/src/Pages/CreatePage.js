import React, { Fragment, useRef } from 'react'
import { Button } from 'react-bootstrap'
import {Create} from "../APIservices/CrudServices"
import Swal from 'sweetalert2'
import FullScreenLoader from '../common/FullScreenLoader';

function CreatePage() {

    let ProductName,ProductCode,Img,UnitPrice,Qty,TotalPrice,Loader = useRef();

    const saveData=()=>{
        let Product_Name=ProductName.value;
        let Product_Code=ProductCode.value;
        let Product_Img=Img.value;
        let Unit_Price=UnitPrice.value;
        let Product_Qty=Qty.value;
        let Total_Price=TotalPrice.value;

        Loader.classList.remove('d-none');

        Create(Product_Name,Product_Code,Product_Img,Unit_Price,Product_Qty,Total_Price)
        .then((result)=>{

          Loader.classList.add('d-none');

            if(result===true){
              ProductName.value="";
              ProductCode.value="";
              Img.value="";
              UnitPrice.value="";
              Qty.value="";
              TotalPrice.value="";

              successMes()

            }else{
                console.log('something went wrong')
            }
        });
    }


    const successMes=()=>{
          Swal.fire(
            'Product Added Successfully Done !',
            'You clicked the button!',
            'success'
          )
    }

    
  return (
    <Fragment>
      <div className='container'>
      <h2>Add Product</h2>
      <div className='row'>
      <div className="col-md-4  p-2">
        <label className="">Product Name</label>
        <input ref={(input)=>ProductName=input}  type="text" className="form-control " required/>
      </div>
      <div className="col-md-4  p-2">
        <label className="">Product Code</label>
        <input ref={(input)=>ProductCode=input}  type="text" className="form-control " required/>
      </div>
      <div className="col-md-4  p-2">
        <label className=""> Image</label>
        <input ref={(input)=>Img=input}  type="text" className="form-control " required/>
       </div>
       <div className="col-md-4  p-2">
        <label className=""> Unit Price</label>
        <input ref={(input)=>UnitPrice=input}   type="text" className="form-control " required/>
        </div>
        <div className="col-md-4  p-2">
        <label className=""> Qty</label>
        <input ref={(input)=>Qty=input}  type="number" className="form-control " required/>
        </div>
        <div className="col-md-4  p-2">
        <label className=""> Total Price</label>
        <input ref={(input)=>TotalPrice=input}  type="text" className="form-control" required/>
        </div>
      </div>

      <br/>
      <div className="row">
        <div className="col-md-4  p-2">
        <Button onClick={saveData} className="btn btn-primary  w-100">Save</Button>
        </div>
        </div>
    </div>
    <div>
    </div>

    <div className='d-none' ref={(div)=>Loader=div}>
      <FullScreenLoader />
    </div>

    </Fragment>
  )
}

export default CreatePage
