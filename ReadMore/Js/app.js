const contenedor = document.querySelector('.container');


contenedor.addEventListener('click', (e)=>{

    const extraText = document.querySelector('.extra');

    if(e.target.matches('.btn-read')){
       extraText.classList.toggle("mostrar")
    }
    
})