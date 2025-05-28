const display = 
    document.querySelector('input[type=tel]');

const teclas = 
    document.querySelectorAll('input[type=button]');

const limpar = document.querySelector('.icon');

limpar.onclick = () => {
    const opcao = confirm('Deseja mesmo limpar?');
    if (opcao) {
        display.value = "";
    }    
}

function valorTeclaToDisplay(i) {
  if(display.value.length < 14){
    display.value += teclas[i].value;
  }
}

for(let i = 0; i < teclas.length; i++){
    teclas[i].onclick = () => {
        valorTeclaToDisplay(i);
    };
}


