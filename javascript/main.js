function a(){
    alert('Hi');
}

let x=5;
// function makeItDouble(){
//     x=x+x;
// }

// let makeItDouble=function(){
//     x=x+x;
// }

// ES6
let makeItDouble=()=>{
    x=x+x;
}

makeItDouble();
makeItDouble();
// alert(x);

let calculate=()=>{
    let n1=document.getElementById('num1').value;
    let n2=document.getElementById('num2').value;
    // let r=parseInt(n1)+parseInt(n2);
    let r=eval(n1+"+"+n2);
    // alert(r);
    document.getElementById('result').value=r;
}