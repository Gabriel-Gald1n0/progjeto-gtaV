/* OUTROS METODOS
//METODO1
var botao = document.querySelector('.btn-plataforma');
botao.addEventListener('click', ativarBotao);

function ativarBotao(){
        var lista = document.getElementById('lista-botao');
        lista.classList.toggle('ativo');
}

//METODO 2
botao.addEventListener("click", () => {
  //substitiu o toggle por if/else
  const verificaBotao = ativarPlataforma.classList.contains("ativo");

  if(verificaBotao){
        ativarPlataforma.classList.remove("ativo");
  } else 
        ativarPlataforma.classList.add("ativo");
});

*/

const botao = document.querySelector(".btn-plataforma");
const ativarPlataforma = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
  ativarPlataforma.classList.toggle('ativo');
});
