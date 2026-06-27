name1=document.querySelector(".name1")
price=document.querySelector(".price")
btnadd=document.querySelector(".add")

const arr=[];

btnadd.addEventListener("click",()=>{
    name=name1.value;
    amount=Number(price.value);
    arr.push(
       {
         name:name,
        amount:amount
       }
    );


    console.log(arr);
    
})

showbtn=document.querySelector(".showbtn")

items=document.querySelector(".items")

showbtn.addEventListener("click",()=>{
    items.innerHTML="";
    arr.forEach(element => {
        const cnode=document.createElement("p");
        cnode.textContent=`${element.name} : ${element.amount}`
        
        items.append(cnode)
        
    });
})

totalbtn=document.querySelector(".totalbtn")

calculate=document.querySelector(".calculate")

totalbtn.addEventListener("click",()=>{
        calculate.innerHTML="";
        sum=0;
    arr.forEach(element => {
        sum+=element.amount;
    });
    const cnode2=document.createElement("p");
    cnode2.textContent=`total is ${sum}`;
    calculate.append(cnode2)
})


