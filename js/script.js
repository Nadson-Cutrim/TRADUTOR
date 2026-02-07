let inputText = document.querySelector('#input-text');
let traducao = document.querySelector(".traducao");
async function traduzir(){
 //Endereço da API de tradução
    let url = "https://api.mymemory.translated.net/get?q="
    +inputText.value
    +"&langpair=pt-BR|en";
//resposta da API
    let resposta = await fetch(url);
//converter resposta para JSON
    let dados = await resposta.json();
    traducao.innerHTML = dados.responseData.translatedText;
    console.log(dados);
}
