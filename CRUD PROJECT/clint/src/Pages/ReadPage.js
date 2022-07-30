import React, { useEffect, useState } from 'react'
import { Delete, Read, Update } from '../APIservices/CrudServices'
import {Table} from 'react-bootstrap'
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom";
import { AiFillEdit,AiFillDelete } from "react-icons/ai";



function ReadPage() {
  let navigate = useNavigate ();

  const [dataList,setDataList]=useState([]);

  useEffect(()=>{
    Read().then((data)=>{
      setDataList(data)
    })
  },[])


  const DeleteItem=(id)=>{
    Delete(id).then((data)=>{
      if(data===true){
        successMes()
        
      }else{
        console.log('something went wrong !')
      }
    })
  }


  const successMes=()=>{
    Swal.fire(
      'Product Delete Success !',
      'You clicked the button!',
      'success'
    )
   }


  const UpdateItem=(id)=>{
    Update(id).then((data)=>{
      navigate("/update/"+id);
    })
  }


  return (
    <div>
      <h2 className='my-3'>Products Information</h2>
      <div className=''>
        <div className='row'>
          <div className='col-md-12'>

            <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Code</th>
                <th>Image</th>
                <th>Unit Price</th>
                <th>Qty</th>
                <th>TotalPrice</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                dataList.map((value,key)=>


                <tr>
                <td>{value.ProductName}</td>
                <td>{value.ProductCode}</td>
                <td><img className='img-fluid img-thumbnail' src={value.Img} alt='product_Image' width="80"/></td>
                <td>{value.UnitPrice}</td>
                <td>{value.Qty}</td>
                <td>{value.TotalPrice}</td>
                <td><button onClick={UpdateItem.bind(this,value._id)} className='btn btn-info'><AiFillEdit /></button> <button onClick={DeleteItem.bind(this,value._id)} className='btn btn-danger'><AiFillDelete /></button></td>
                </tr>


                )
              }
            </tbody>
          </Table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadPage
