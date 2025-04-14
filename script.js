const contador = document.querySelector('.contador');
const boton = document.querySelectorAll('.boton');

let contar = 0;
contador.innerText = contar;

for (let i = 0; i < boton.length; i++){
    const btn = boton[i];

    btn.addEventListener('click', HandleAction);
}

function HandleAction (evt) {
    const accion = evt.target.dataset.action.toLowerCase();

        if (accion == "aumentar"){
            contar++;
        }else if (accion == "disminuir") {
            contar--;
        }else if (accion == "reestablecer"){
            contar=0;
        }else if (accion == "masdiez") {
            contar+=10;
        }else if (accion == "menosdiez") {
            contar-=10;
    }
    
    contador.innerText = contar;
}