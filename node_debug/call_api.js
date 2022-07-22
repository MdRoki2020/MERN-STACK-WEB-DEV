const axios=require('axios');

const url="https://restcountries.com/v3.1/all";
axios.get(url).then((res)=>{

    let countryList=res.data;
    let status=res.status;

    console.log(countryList)
    console.log(status)

}).catch((err)=>{
    console.log(err)
})