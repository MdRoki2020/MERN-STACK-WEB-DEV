import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { HideLoader, ShowLoader } from "../redux/state-slice/SettingSlice";
import Store from "../redux/store/Store";

const BaseUrl="https://mern-task-manager-2022.herokuapp.com/api/v1"

export function RegistrationRequest(email,firstName,lastName,mobile,password,photo){

    Store.dispatch(ShowLoader())
    let URL=BaseUrl+"/registration";

    let postBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password,photo:photo}

    return axios.post(URL,postBody).then((res)=>{
        Store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==="fail"){
                if(res.data['data']['keyPattern']['email']===1){
                    ErrorToast("Email Already Exist")
                    return false;
                }
                else{
                    ErrorToast("Something Went Wrong")
                    return false;
                }
            }
            else {
                SuccessToast("Registration Success")
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }

    }).catch((err)=>{
        Store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong");
        return false;
    })
}