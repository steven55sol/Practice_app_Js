// Declaracion de variables
const containerTask = document.querySelector(".container-create-task");
const containerList = document.querySelector(".container-list-task");
const $template = document.querySelector(".template");

let listTask = [];

containerTask.addEventListener("click", (e)=>{
    if(e.target.matches("#btn-task")){
        CreateTarea();
    }
})

document.addEventListener('DOMContentLoaded', ()=>{
    listTask = JSON.parse(localStorage.getItem("task")) || [];
    AgregarTarea();
})



function CreateTarea(){
    const data = {
        value : document.querySelector("#input-task").value,
        status : false
    }

    validateStatus();

    listTask = [...listTask, data];

    AgregarTarea()

}


function AgregarTarea(){

    // Limpiamos el Html
    limpiarHtml();
    
    if(listTask.length > 0){
        listTask.forEach((task)=>{
            let [data] = listTask;
            // Modifiquemos el calor de p
            const clone = $template.content.cloneNode(true);
            let valuetask = clone.querySelector("p")
            valuetask.textContent = data.value;
            valuetask.parentElement.dataset.status = data.status;
            containerList.appendChild(clone);
        })
    }else{
        const mensaje = document.createElement("p");
        mensaje.textContent= "NO TIENE NINGUNA TAREA"
        mensaje.classList.add('vacio');
        
        containerList.appendChild(mensaje)
    }
    
    
    //Sincronizar Base de datos
    SincronizarLocal();

}


function SincronizarLocal(){
    localStorage.setItem("task",JSON.stringify(listTask));
}

function limpiarHtml(){
    while(containerList.firstChild){
        containerList.firstChild.remove()
    }
}

