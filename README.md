# Desafio Frontend - TEIA
## Decrição
O Projeto é uma aplicação frontend desenvolvida utilizando Angular, que consome a API disponibilizada pelo desafio e exibe os dados de forma dinâmica em uma interface amigável e responsiva.

Para mais informações, a especificação o desafio pode ser acessada através do link abaixo:

[**Especificação - Desafio Dev Frontend**](https://github.com/alansalvaterra/desafio-teia-frontend/blob/main/especificacao.pdf)

## Funcionalidades
- A aplicação permite a visualização de imagens retornadas pela API de 2 formas:

  i.  Retorno aleatório informando o número de imagens a serem retornadas

  ii. Seleção informando os dados da imagem
  
- Salvar/Remover de favoritos as imagens preferidas
- Link para download da imagem
- Paginação com limite de até 8 imagens
- Responsividade à desktops e aparelhos mobiles

## Acesso ao projeto
### Acesso online

Você pode acessar o projeto online através do link abaixo:

[**Desafio Frontend - TEIA**](https://desafio-teia-frontend.vercel.app/home)

### Acesso em seu ambiente de desenvolvimento local

Pré requisitos:
- **Node.js:** Se você ainda não o possui, você pode baixá-lo em [nodejs.org](https://nodejs.org/).
- **Git:** Caso ainda não o tenha, você pode fazer o download em [git-scm.com](https://git-scm.com/).

**1º Passo** - Clonar o repositório

Abra seu terminal e clone o repositório para o seu ambiente local usando o seguinte comando:

    git clone https://github.com/alansalvaterra/desafio-teia-frontend.git

**2º Passo** - Instale o Angular (Utilizei a versão 14):

    npm install -g @angular/cli@14.0.0

**3º Passo** - Instale as dependências do projeto com o seguinte comando:

    npm install

**4º Passo** - Inicie o servidor de desenvolvimento local:

    npm serve

**5º Passo** - Após a inicialização, seu projeto estará disponível em seu navegador no endereço:

    http://localhost:4200/
