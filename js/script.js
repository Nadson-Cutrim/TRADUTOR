let inputText = document.querySelector('#input-text');
let traducao = document.querySelector(".traducao");
let idioma = document.querySelector(".idioma");
async function traduzir(){
 //Endereço da API de tradução
    let url = "https://api.mymemory.translated.net/get?q="
    +inputText.value
    +"&langpair=pt-BR|"+idioma.value;
//resposta da API
    let resposta = await fetch(url);
//converter resposta para JSON
    let dados = await resposta.json();
    traducao.innerHTML = dados.responseData.translatedText;
    console.log(dados);
}


