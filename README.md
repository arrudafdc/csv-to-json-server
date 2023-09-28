# csv-to-json-server

Esse é o back-end do csvToJsonApp.

Uma API construída com NodeJS, Typescript e Express que recebe um arquivo CSV, transforma para JSON e disponibiliza o mesmo para download.

## Sobre o projeto

Esse projeto faz parte do meu portfólio pessoal e começou com o desejo de explorar e aprender mais sobre APIS nativas do Node. Apesar de simples, a ideia era criar algo eficiente e funcional que pudesse de fato processar grandes arquivos sob demanda de forma rápida e com um consumo eficiente de memória utilizando a API de Streams.

## Como usar

Para executar este projeto em modo de desenvolvimento, você só precisará ter o NodeJS instalado.

```bash
# clonar repositório
git clone https://github.com/arrudafdc/csv-to-json-with-streams.git

# entrar na pasta do projeto csv-to-json-server
cd csv-to-json-server

# baixar as dependências
npm install

# executar o projeto em modo de desenvolvimento
npm run dev
```

## Rotas

A URL base é http://localhost:3333

### upload

- Rota do tipo POST que faz o upload de arquivos CSV e retorna um nome único para ser usado como parametro para a rota GET download.

> http://localhost:3333/uploads

### download

- Rota do tipo GET que disponibiliza o arquivo JSON para download baseado no  parâmetro de nome único gerado na rota POST upload.

> http://localhost:3333/download/:file


## Construído com

* Typescript
* NodeJS
* Express
* Multer
* Cors

## Autor

Lucas Arruda

