

//VARIABLES

let container_blockBase = document.querySelector("#container_blockBase")
let base_reverse = document.querySelector("#base_reverse")
let date_number = document.querySelector("#date") 




//FUNCIONES
const circle_1 = () =>{
    number_uno.style.background = "hsl(217, 12%, 63%)"
    number_uno.style.color = "white"
    number_uno.style.transition = "0.3s all"
    /////
    number_dos.style.background = "hsl(220, 10%, 24%)"
    number_tres.style.background = "hsl(220, 10%, 24%)"
    number_cuatro.style.background = "hsl(220, 10%, 24%)"
    number_cinco.style.background = "hsl(220, 10%, 24%)"
    date_number.textContent = 1
}

const circle_2 = () =>{
    number_dos.style.background = "hsl(217, 12%, 63%)"
    number_dos.style.color = "white"
    number_dos.style.transition = "0.5s all"
    /////
    number_uno.style.background = "hsl(220, 10%, 24%)"
    number_tres.style.background = "hsl(220, 10%, 24%)"
    number_cuatro.style.background = "hsl(220, 10%, 24%)"
    number_cinco.style.background = "hsl(220, 10%, 24%)"
    date_number.textContent = 2
 
}

const circle_3 = () =>{
    number_tres.style.background = "hsl(217, 12%, 63%)"
    number_tres.style.color = "white"
    number_tres.style.transition = "0.5s all"
    /////
    number_uno.style.background = "hsl(220, 10%, 24%)"
    number_dos.style.background = "hsl(220, 10%, 24%)"
    number_cuatro.style.background = "hsl(220, 10%, 24%)"
    number_cinco.style.background = "hsl(220, 10%, 24%)"
    date_number.textContent = 3  
}

const circle_4 = () =>{
    number_cuatro.style.background = "hsl(217, 12%, 63%)"
    number_cuatro.style.color = "white"
    number_cuatro.style.transition = "0.5s all"
    /////
    number_uno.style.background = "hsl(220, 10%, 24%)"
    number_tres.style.background = "hsl(220, 10%, 24%)"
    number_dos.style.background = "hsl(220, 10%, 24%)"
    number_cinco.style.background = "hsl(220, 10%, 24%)"
    date_number.textContent = 4  
}

const circle_5 = () =>{
    number_cinco.style.background = "hsl(217, 12%, 63%)"
    number_cinco.style.color = "white"
    number_cinco.style.transition = "0.5s all"
    /////
    number_uno.style.background = "hsl(220, 10%, 24%)"
    number_tres.style.background = "hsl(220, 10%, 24%)"
    number_cuatro.style.background = "hsl(220, 10%, 24%)"
    number_dos.style.background = "hsl(220, 10%, 24%)" 
    date_number.textContent = 5
}

const pintarFrente = () =>{
    container_blockBase.classList.add("container_blockBase_js")
    base_reverse.classList.add("base_reverse_js")
    
}

const pintarDetras = () =>{
    container_blockBase.classList.remove("container_blockBase_js")
    base_reverse.classList.remove("base_reverse_js")
}


//EVENTOS
document.addEventListener("click", (e) =>{
    if(e.target.id === "number_uno"){
        circle_1()

    }else if(e.target.id === "number_dos"){
        circle_2()

    }else if(e.target.id === "number_tres"){
        circle_3()

    }else if(e.target.id === "number_cuatro"){
        circle_4()

    }else if(e.target.id === "number_cinco"){
        circle_5()

    }else if(e.target.id === "buttom_submit"){
        pintarFrente()
    }else if(e.target.id === "buttom_return"){
        pintarDetras()
    }
})




