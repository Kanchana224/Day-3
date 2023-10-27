
       obj1={name:"person 1",age:5};
       obj2={age:5,name:"person 1"};

var result=JSON.stringify(obj1)
var result1=JSON.stringify(obj2)
console.log(result===result1) 


var request=new XMLHttpRequest() 
request.open("GET","https://restcountries.com/v3.1/all","true") 
request.send(); 
request.onload=function(){
var data=request.response;
var result=JSON.parse(data)
console.log(result) 
for(var i=0;i<result.length;i++){
console.log(result[i].flags.png)}
} 


var request=new XMLHttpRequest() 
request.open("GET","https://restcountries.com/v3.1/all","true") 
request.send(); 
request.onload=function(){
var data=request.response;
var result=JSON.parse(data)
console.log(result)
for(var i=0;i<result.length;i++){
console.log((result[i].name.common),(result[i].region),(result[i].subregion),(result[i].population))
}
} 

