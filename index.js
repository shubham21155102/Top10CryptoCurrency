const express=require('express');
const ejs=require("ejs");
const app=express();
app.use(express.json());
app.set('view engine','ejs');
app.use(express.static('public'));
// app.use("views");
let url = 'https://api.coincap.io/v2/assets/';
const arr=[];
let options = {
  method: 'GET',
};
async function value(){
    try{
        const response = await fetch(url, options);
        const json = await response.json();
        // console.log(json);
        return json;
    }
    catch(error){
        console.log(error);
    }
}
value().then((data)=>{
    var brr=[];
    for (let index = 0; index <10; index++) {
        brr.push(data.data[index]);
    }
    arr.push(brr);
},
);
app.get('/',(req,res)=>{
    res.render('index',{
        arr:arr,
    });
})
console.log(arr);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});