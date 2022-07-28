import React from 'react'
import Axios from 'axios'

function fileUpload() {
    let URL="/...."


    let myformData=new FormData();

    myformData.append('file1',"fileobject1")
    myformData.append('file2',"fileobject2")
    myformData.append('file3',"fileobject3")

    let HeaderConfig={
        header:{
            "Content-Type":"multipart/form-data",
        }
    }

    Axios.post(URL,myformData,HeaderConfig).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })

  return (
    <div>
      
    </div>
  )
}

export default fileUpload
