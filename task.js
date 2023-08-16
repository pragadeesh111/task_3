let a = { Name:"person 1", age:"4"};
let b = {  age:"4", Name:"person 1"};
let keys = Object.keys(a);
console.log(keys)
let flag = true;
for(let c of keys){
    if(a[c] !== b[c]){
        flag  = false
        break;
    }
}
flag?console.log("equal"):console.log("unequal")

console.log("welcome to html js")

function handleData(){
    console.log(JSON.parse(this.responseText))
}
const req = new XMLHttpRequest();
req.onload = (res)=>{
    console.log(JSON.parse(res.srcElement.responseText))

}
req.open("GET","https://restcountries.com/v3.1/all")
req.send()