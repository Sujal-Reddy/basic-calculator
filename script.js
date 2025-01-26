const display=document.getElementById('display');

const buttons=document.querySelectorAll(".btn");

buttons.forEach((btn) =>{
    btn.addEventListener('click',()=>{
        if(btn.innerText === 'C'){
            display.value='';
        }else if(btn.innerText === '='){
            try{
                if(display.value.includes('/0')){
                    display.value="error can't divide by 0";
                }else{
                display.value = eval(display.value);
            }
            }catch{
                display.value='error occured';
            }
        }else{
        display.value+=btn.innerText;
        }
    });
});

