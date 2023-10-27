// Question1
//        How to compare two JSON the same properties without order 
       obj1={name:"person 1",age:5};
       obj2={age:5,name:"person 1"};

var result=JSON.stringify(obj1)
var result1=JSON.stringify(obj2)
console.log(result===result1) 

// Question2
//        Use the rest countries API URL=> https://restcountries.com/v3.1/all and display all the country
//        flags in the console.

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

// Question3
//           Use the rest countries API URL=> https://restcountries.com/v3.1/all and display all the country
//           names,regions,subregions,population in the console.   

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

