const form = document.getElementById('form_calcu');
const campoAInput = document.getElementById('campoA'); 
const campoBInput = document.getElementById('campoB'); 
 
function calculaCampo(){
  //   // Declarações de variáveis e obtenção dos valores dos inputs dos formulários
    var campoA=parseFloat (document.getElementById('campoA').value); 
    var campoB=parseFloat (document.getElementById('campoB').value); 

    function mensagemSucess(mensagem){
      document.getElementById("resultado").innerHTML = mensagem; 
    }

 // Variável que será responsável por comparar os dois campos 
    if(isNaN(campoA) || isNaN(campoB))  {
      // validação se o número for NaN
      mensagemSucess("Por favor, insira valores numéricos validos");  
    } else {
      if(campoB > campoA) { 
           mensagemSucess("Sucesso! O campo B é maior que o campo A "); 
          // acessando o style do meu elemento (estilo) html com javaScript
       }  else  { 
              mensagemSucess(''); //function recebendo vazio apos o meu else ser true
              document.querySelector('.error-Msg').style.display = 'block';
     }   
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault(); //escutando o meu formulario  
  calculaCampo(); // chamando a minha function calculacampo que irá calcular os meus dois campos 
  campoAInput.value = '' //limpando o  valor dos campo A
  campoBInput.value = '' // limpando o valor dos campo B 
}); 




