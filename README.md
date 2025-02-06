# Projeto de Back-End - Web Services🎈

### Objetivo:
O objetivo deste projeto é desenvolver uma aplicação sobre filmes que seja bem estruturada e siga as melhores práticas de desenvolvimento de software.

### Estrutura do Projeto:

## 1. Diagrama de Classes
O esquema a seguir representa as entidades do sistema e suas interações:

![image](https://github.com/user-attachments/assets/0a3e26b2-e6ce-4260-b541-18265cd7b4db)


-`Movie`: Principal Entidade, onde suas propriedades são: id, tittle, actor, duration e gender.

-`MovieList`: Administra um catálogo de filmes e executa operações de manipulação de dados (CRUD).

## 2. Arquitetura MVC
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
## 3. Dependências
As seguintes dependências foram instaladas para garantir o funcionamento adequado do projeto:
```
"dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "nodemon": "^3.1.9",
    "uuid": "^11.0.5"
}
```
## 4. ROUTES
```
router.get("/movies", movieController.getAllMovies);
router.post("/movies", movieController.addMovie);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);
router.get("/movies/:id", movieController.getMovieById);
```
## 5. Formato JSON

## 6. Formato XML

## 7. Postman
Foram criadas coleções de requisições para testar a API.

### Endpoints

-`GET`: Listar todos os filmes
http://localhost:3000/api/movies

-`GET`: Buscar filme pelo ID
http://localhost:3000/api/movies/4e01796f-9044-49b3-b801-4de2343a6a1c

Body (JSON):

-`POST`: Adicionar um filme
http://localhost:3000/api/movies/

```
{
    "title": "Cisne Negro",
    "actor": "Natalie Portman",
    "duration": "01:48:00",
    "gender": "suspense"
}
```
-`DELETE`: Remover um filme
http://localhost:2080/api/songs/4c2b1b28-634c-44a7-85b8-f84e1bc3da8e

-`PUT`:  Atualizar um filme
http://localhost:2080/api/songs/4c2b1b28-634c-44a7-85b8-f84e1bc3da8e




