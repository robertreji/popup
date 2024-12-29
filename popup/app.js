let btn=document.querySelector("#submit")
let btn_pop=document.querySelector("#close")
let popup=document.querySelector("#popup")

btn.addEventListener("click",(event)=>
{
    console.log(event.target)
    popup.style.top = "50%";
    popup.classList.remove('opacity-0', 'scale-[.1]');
    popup.classList.add('opacity-100', 'scale-[1]');
})


btn_pop.addEventListener("click",(event)=>
    {
        console.log(event.target)  
        popup.style.top = "0"; 
        popup.classList.remove('opacity-100', 'scale-[1]');
        popup.classList.add('opacity-0', 'scale-[.1]');

    })