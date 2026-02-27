<div align="center">
  <h1>Tradutor Universal</h1>
  <p>
    Uma aplicação de tradução desenvolvida para facilitar a comunicação entre diferentes idiomas de forma rápida e eficiente.
  </p>

  <p>
    <img src="https://img.shields.io/github/license/Nadson-Cutrim/TRADUTOR" alt="Licença">
    <img src="https://img.shields.io/github/last-commit/Nadson-Cutrim/TRADUTOR" alt="Último Commit">
  </p>
</div>

<!-- Inserir uma imagem ou GIF do projeto aqui -->
<!-- Ex: <p align="center"><img src="caminho/para/sua/imagem.gif" alt="Demonstração do Tradutor"></p> -->

---

## 📋 Tabela de Conteúdos

- Funcionalidades
- Tecnologias Utilizadas
- Começando
- Uso
- Configuração
- Como Contribuir
- Licença

---

## ✨ Funcionalidades

- ✅ Tradução de texto em tempo real.
- ✅ Suporte a múltiplos idiomas.
- ✅ Interface intuitiva e amigável.
- ✅ Detecção automática de idioma.

---

## ️ Tecnologias Utilizadas

- **Linguagem:** HTML, CSS, JavaScript
- **API de Tradução:** MyMemory API

---

## 🚀 Começando

Para ter uma cópia local do projeto em funcionamento, siga estes passos.

### Pré-requisitos

- Um navegador web moderno (Chrome, Firefox, Edge, etc.).
- Conexão com a internet.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/Nadson-Cutrim/TRADUTOR.git
    ```
2.  Acesse o diretório do projeto:
    ```bash
    cd TRADUTOR
    ```

Nenhuma outra instalação é necessária!

---

## Usage

Você pode iniciar a aplicação de duas maneiras:

1.  **Simplesmente abrindo o arquivo HTML:**
    - Abra o arquivo `index.html` diretamente no seu navegador.

2.  **(Recomendado para Desenvolvimento) Usando um servidor local:**
    - Isso evita possíveis problemas de CORS ao fazer chamadas para a API. Se você tem o Node.js instalado, pode usar o `live-server`.
    ```bash
    npx live-server
    ```

---

## 🔧 Configuração

O projeto utiliza a API MyMemory, que permite um número limitado de traduções diárias sem a necessidade de uma chave de API. [1, 4] Para um uso mais extenso, você pode se registrar com um e-mail para obter uma chave.

1.  Encontre o arquivo JavaScript que faz a chamada para a API (ex: `script.js`).
2.  Insira sua chave (seu e-mail) na variável apropriada.

> **⚠️ Importante:** Nunca exponha sua chave de API em um repositório público. Se você for fazer o deploy do seu projeto, considere usar uma função serverless como um proxy para proteger sua chave.

---

## 🤔 Como Contribuir

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1.  Faça um _Fork_ do projeto.
2.  Crie uma _Branch_ para sua feature (`git checkout -b feature/AmazingFeature`).
3.  Faça o _Commit_ de suas alterações (`git commit -m 'Add some AmazingFeature'`).
4.  Faça o _Push_ para a Branch (`git push origin feature/AmazingFeature`).
5.  Abra um _Pull Request_.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
