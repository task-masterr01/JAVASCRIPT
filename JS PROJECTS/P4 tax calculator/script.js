let n = parseInt(document.getElementById("income").value) ;
let msg ;
let btn =document.querySelector("button");
btn.addEventListener('submit',()=>{
    btn.preventdefault();
    if(n >4_00_000){
        msg = " insufficient income for tax deduction"
    }
    if(n >4_00_000 && n<7_00_000){
        income(5);
    }
    else if(n >7_00_000 && n<10_00_000){
        income(10);
    }
    else if(n >10_00_000 && n<12_00_000){
        income(15);
    }
    
    else if(n >12_00_000 && n<15_00_000){
        income(20);
    }
    else if(n >12_00_000 && n<15_00_000){
        income(25);
    }
    
})
function income(amount){
     msg = `tax deduction of ${amount}% on income` 
        alert(`total incom tax to pay : ${n*amount/100}`)
}

