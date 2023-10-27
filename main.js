const form = document.getElementById('form-Deposito');
const nomeBeneficiado = document.getElementById('nome-beneficiado');

function validaNome(nomeCompleto)  {
  const nomeComoArry = nomeCompleto.split(' ');//recebendo um valor depois de um espaço  
  return nomeComoArry.length >= 3; // mandar so ser o indice for mais ou igual  a tres
  //  estou colocando uma propriedade para saber se o o campo nome <beneficiado> tem dois indice
}

form.addEventListener ('submit',function(e){//desativando o efeito enviar do meu submit 
    let formEValido = false;
    e.preventDefault(); // apagando as informações antigas digitadas pelo usúario 

    // requisitando informacoes do cliente{}
    const numeroConta = document.getElementById('numero-conta'); 
    const valor = document.getElementById('valor'); 
    const descricao = document.getElementById('descricao');
    const ultimoDigito = document.getElementById('ultimo-Digito')

    const mensagemSucesso = 'O valor de ' + valor.value + ', depositado  para o  beneficiado: ' + nomeBeneficiado.value + ' com o número da conta ' + numeroConta.value + ' digito da conta ' + ultimoDigito.value +' e a descrição:  ' +descricao.value+ '';
    
    formEValido = validaNome(nomeBeneficiado.value);// chamando a function validaNome
    if (formEValido)  {
      const conteinerMensagenSucess = document.querySelector('.mensagens-Sucess'); 
      conteinerMensagenSucess.innerHTML = mensagemSucesso;  
      conteinerMensagenSucess.style.display = 'block'
      e.preventDefault(); // carregando as informacoes do usúario
      nomeBeneficiado.value ='';
      numeroConta.value = '';
      valor.value = '';
      descricao.value = '';
      ultimoDigito.value = '';
      
    }else{
      nomeBeneficiado.style.border ='1px solid red'; 
      document.querySelector('.error-Mensagem').style.display = 'block'; 
    }
});

nomeBeneficiado.addEventListener('keyup',function(e)  {
  console.log(e.target.value);  
  formEValido = validaNome(e.target.value); 
  if(!formEValido)  {
    nomeBeneficiado.classList.add('error');
    // nomeBeneficiado.style.border ='1px solid red'; 
    document.querySelector('.error-Mensagem').style.display = 'block'; 
}else{
  nomeBeneficiado.style =''; 
  document.querySelector('.error-Mensagem').style.display = 'none';
}

})

