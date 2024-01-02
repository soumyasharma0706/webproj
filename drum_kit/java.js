console.log("hey i am there")
let count=0;
const myinterval=setInterval(function abc(){
    console.log("hello world");
    count++;
    if (count==3){
        clearInterval(myinterval);
        console.log("this is the last print");
        
    }
},2000)
while(true){
    let name=prompt("enter your name");
    if(name==="soumya"){
        break;
    }else{
        console.log("not a valid name");
    }
}
const class1={
    "name":"soumya",
    "age":"19",
    "college":"iit"
}
console.log(class1["name"]);
// const{name1,age1}=class1;
// console.log(age1);
// console.log(name1);
alert("hello");