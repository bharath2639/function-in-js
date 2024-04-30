// object creation by using for in loop


let information = {
    fullName : "bharath",
    lastName : "kumar",
    age : 25,
    education : "bba"
}

for( let values in information){
    console.log(information[values]);
}

// function declaration it means not excutable in function but it is excuted  in later
function bymultiply(a,b){
    return a*b ;
}

console.log(bymultiply());  //calling function


// 2.function expressions is storing data in a variable the variable can be used as a function: 

const byAdd = function(a,b){return a+b;}

console.log(byAdd(1,2));


function addition(n,n2,op){
    if(op ==='+' ) {
    let add = `by add the two number ${n + n2}`;
    return add ;}
    else if(op === '-' ){
        let minus = `by minus two number ${n - n2}`;
        return minus ;
    }
    else if(op==='*'){
        let multi =`by multiply two number ${n * n2}`;
        return multi;
    }



}

console.log(addition(5,2,'-'));
addition(5,2)


let name ="bhararh";

for(let n=0; n<name.length;n++){
    console.log(name[n]);
}





function myDetails (fullDetails){
    let fName = fullDetails.fName
    console.log(fName);

}

let object = {
    fName : "bharath",
    lName : "kumar",
    age : 25,
    rollNumber : 25220

}

myDetails(object)



console.log(object.fName,object.lName);


function myInfo (fName,age,lName="kumar"){
    return `my name is ${fName} ${lName} my age ${age}`;

}

let myDetails2 = myInfo("bharath",25)
console.log(myDetails2);

let data = (fName,lName,age=25) => {
    return `My name ${fName}${lName} and my age is ${age}, `
}

console.log(data("bharath","kumar"));

console.log(typeof(data));

let data2 = function(fName,age,lName="kumar"){
    return `my name ${fName} ${lName} and my age is ${age}`;
}
console.log(data2("bharath","25"));

let name2 = "bharath";

let n =0;

while(n<name2.length ){

    console.log(name2[n]);
    n++
}



let primeNumber = (number) =>{
    if(number<2){
    return false ;
    }else if(number==2){
        return true ;
    }else if(number%2==0){
        return false ;
    }
    for(num=3; num=Math.sqrt(number); num+=2){
        if(number%num==0){
        return false;
        }
    }


}

    
    

console.log(primeNumber());

const bharathName = "karthilk"

let bharathNames = "bharath";
function name1(){
    const bharathName = "bharath";
    // console.log(bharathName);

}


name1()



let nameB ="bjsnc";
console.log(nameB)

let dataMine = (details)=>{
    let againMine ="pandu";
    details(againMine)
    // let againMine ="pandu";
}

dataMine(function(details2){
    let myName = "bharath";
    console.log(myName,details2);
    console.log();

})



let myAdd = (added)=>{
    // console.log(added);
   let num3 = added(10,25)
   return num3;
}

let myNuber=myAdd(function(num,num2){

    return `number is ${num + num2}`
})



// // added()
console.log(myNuber);



let myNum = (num1,num2)=>{
    return num1+num2

}
console.log(myNum(10,25));


for(let n=0; n<=10; n++){
    if(n%2==0){

        console.log(n);
    }
}

let objects = {
    name : "bharath",
    rollNumber : 22225,
    class : "bba"

}


let data1 = Object.values(objects);

console.log(data1);

for(let values in objects){
    console.log(values);
}

let data3 = ["naveen","bharath","kumar"];
// console.log(data);
for(let element of data3 ){
    console.log(element);
}





let arr =["bharath","kumra","abhilad","karathik",55,65,false,true];

arr.forEach((mine,num,eles)=>{
    if(mine==="kumra"){
        
    }else{

    }
console.log(mine);

})

let names2 = arr.map((nikitha)=>{
    // console.log(nikitha);
    if(typeof(nikitha)==='number'){
        return nikitha;
    }
})
console.log(name);

let namess2 = names2.filter((peru)=>{
    // console.log(name2);
    return peru;
})

console.log(name2);




let letter = "a";
let letter2 = '97';

console.log(letter==letter2);

// console.log(letter.charCodeAt());


let data4 = (num) => {
    if(num%2 == 0){
        console.log("number is even");
    }else{
        console.log("number is not");
    }
}

data4(5)


let array = ["bharath","kalyan","pruthiv",{lName:"karthik",rollNum : 25611},"harsha","2522",24454];

console.log(array);

// console.log(typeof(array));

let data5 = array.forEach((nameFirst,roolNum) =>{

})



































       