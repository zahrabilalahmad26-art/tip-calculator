
let bt=document.querySelector("#cal");
let ans=document.querySelector(".ans");``

bt.addEventListener("click",()=>{
    let in1=Number(document.querySelector("#in1").value);
    let in2=Number(document.querySelector("#in2").value);
    let tot=in1+in2;
    ans.innerText = tot;
});

// function cal(){
//     let tot=in1+in2;
//     bt.innerText = tot;
// }
// cal();

