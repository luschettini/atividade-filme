# Projeto de Back-End - Web Services🎈

### Objetivo:
O objetivo deste projeto é desenvolver uma aplicação sobre filmes que seja bem estruturada e siga as melhores práticas de desenvolvimento de software.

## Estrutura do Projeto
##### Entidade Principal
Filme
##### title: Título do filme

##### actor: Ator principal

##### duration:Duração do filme

##### gender: Gênero do filme

### Diagrama de Classes


### Arquitetura MVC
```
src/
├── controllers/
│   ├── movieController.js
├── models/
│   ├── Movie.js
│   ├── MovieList.js
├── routes/
│   ├── MovieRoutes.js
├── server.js
```
### API Endpoints

### Listar Todos os Filmes

#### GET:
http://localhost:3000/api/movies
#### Descrição: 
Lista todos os filmes.

### Corpo da Requisição (JSON):
```json
{
        "id": "51994d8e-561f-46fa-81af-94d15299db72",
        "title": "Como Eu Era Antes de Você",
        "actor": "Emilia Clarke e Sam Claflin",
        "duration": "01:50:00",
        "gender": "Drama"
    },
    {
        "title": "Diário de uma Paixão",
        "actor": "Ryan Gosling e Rachel McAdams",
        "duration": "02:30:00",
        "gender": "Romance"
    },
    {
        "title": "Cisne Negro",
        "actor": "Natalie Portman",
        "duration": "01:48:00",
        "gender": "suspense"
     }
```

### Encontrar Filme pelo ID
#### GET: 
http://localhost:3000/api/movies/4e01796f-9044-49b3-b801-4de2343a6a1c
#### Descrição:
Encontra um filme pelo seu ID.

### Adicionar Filme
#### POST: 
http://localhost:3000/api/movies/
#### Descrição: 
Adiciona um novo filme.

### Corpo da Requisição (JSON):
```json
{
    "title": "Cisne Negro",
    "actor": "Natalie Portman",
    "duration": "01:48:00",
    "gender": "suspense"
}
```

### Deletar Filme
#### DELETE:
http://localhost:2080/api/songs/4c2b1b28-634c-44a7-85b8-f84e1bc3da8e
#### Descrição: 
Deleta um filme pelo seu ID. Nesse caso, foi deletado o filme Diário de uma Paixão.


### Atualizar Filme
#### PUT: 
http://localhost:2080/api/songs/4c2b1b28-634c-44a7-85b8-f84e1bc3da8e
#### Descrição: 
Atualiza as informações de um filme pelo seu ID.

### Corpo da Requisição (JSON):
```json
{
    "title": "Cisne Negro",
    "actor": "Natalie Portman",
    "duration": "01:48:00",
    "gender": "suspense e terror psicológico"
}
```


