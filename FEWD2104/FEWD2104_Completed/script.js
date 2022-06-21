function celtofah(){

    //  define variable c and f and store the element in it with id 'celcius' and 'fahrenheit' respectively
    c=document.getElementById("celcius");
    f=document.getElementById("fahrenheit");
    let output= (parseFloat(c.value) * 9/5)+ 32;

    // store the value of output in element with id 'fahrenheit'
    f.value = parseFloat(output.toFixed(2));
}

function fahtocel(){

    //  define variable c and f and store the element in it with id 'celcius' and 'fahrenheit' respectively
    c=document.getElementById("celcius");
    f=document.getElementById("fahrenheit");
    let output= (parseFloat(f.value)-32)*5/9;

    // store the value of output in element with id 'celcius'
    c.value=parseFloat(output.toFixed(2));
}

function displaytempconv(){

    // Write code to hide the button and display the temperature converter
    document.getElementById("button").style.display="none";
    document.getElementById("tempconv").style.display="block";
}

let s="ABHISHEK";

// write code to display each character in the string s
for(i=0;i<s.length;i++){
    c=s[i];
    console.log(c);
}

// Declare an array a storing all number between 0 to 9
let a=[0,1,2,3,4,5,6,7,8,9];
//  Iterate and print all the number in the array you created
for(i=0;i<a.length;i++){
    c=a[i];
    console.log(c);
}

// Declare and initialize a dictionary named vehicle with key as type and wheel and value pair as CAR and 4 respectively
let vehicle = {
    type : 'CAR',
    wheel : 4
};
console.log(vehicle.type);
