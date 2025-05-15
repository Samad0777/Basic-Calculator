let input = document.querySelector(".result input");
let btns = document.querySelectorAll("button");

for(let i = 0; i<=17; i++){
    
    btns[i].addEventListener("click",()=>{
        
        let val = btns[i].innerText; // Button ka andar ka text milega

        if (val === "Ac") {
            input.value = " ";
        }
        else if(val === "="){
            input.value = eval(input.value);
        }
        else {
            input.value += val; // button ka text add karo
        }

    })
    

}

