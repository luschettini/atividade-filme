# Projeto de Back-End - Web Services🎈

### Objetivo:
O objetivo deste projeto é desenvolver uma aplicação sobre filmes que seja bem estruturada e siga as melhores práticas de desenvolvimento de software.

### Estrutura do Projeto:

##  Diagrama de Classes
O esquema a seguir representa as entidades do sistema e suas interações:

<img width="429" alt="image" src="https://github.com/user-attachments/assets/fe7a4427-642b-435d-b2a2-06a7f1cdf1c7" />




-`Movie`: Principal Entidade, onde suas propriedades são: id, tittle, actor, duration e gender.

-`MovieList`: Administra um catálogo de filmes e executa operações de manipulação de dados (CRUD).

## Arquitetura MVC
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
##  Dependências
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
## ROUTES
```
router.get("/movies", movieController.getAllMovies);
router.post("/movies", movieController.addMovie);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);
router.get("/movies/:id", movieController.getMovieById);
```

## Postman
Foram criadas coleções de requisições para testar a API.

### Listar Todos os Filmes

```http
GET http://localhost:3000/api/movies
```
**Descrição**: Lista todos os filmes disponíveis na base de dados.

![Captura de tela 2025-02-06 204702](https://github.com/user-attachments/assets/462e977b-6d98-458c-a9cf-ce2ea829a0fe)

###  Encontrar um Filme pelo ID

```http
GET http://localhost:3000/movies/{id}
```

**Fatores**:
- `{id}`: ID do filme a ser buscado.

**Descrição**: Localiza um filme específico através do ID fornecido.

![image](https://github.com/user-attachments/assets/7d26b9e6-c695-47b2-81cf-2208d894585d)

###  Adicionar um Filme

```http
POST http://localhost:3000/api/movies/
```

**Body (JSON):**
```json
{
    "title": "Cisne Negro",
    "actor": "Natalie Portman",
    "duration": "01:48:00",
    "gender": "Suspense"
}
```

**Descrição**: Insere um novo filme na base de dados.

![image](https://github.com/user-attachments/assets/55e04c8b-68b4-434a-b87c-302deba702c0)

### Atualizar um Filme

```http
PUT http://localhost:3000/api/movies/{id}
```

**Fatores**:
- `{id}`: ID do filme a ser modificado.
**Body (JSON):**
```json
{
    "title": "Título",
    "actor": "Ator",
    "duration": "Duração",
    "gender": "Gênero"
}
```

**Descrição**: Realiza a atualização de um filme na base de dados.

![image](https://github.com/user-attachments/assets/f317ca8a-168a-44f7-afe2-7cbf17815526)

###  Deletar um Filme

```http
DELETE http://localhost:3000/api/movies/{id}
```

**Fatores**:
- `{id}`: ID do filme a ser deletado.

**Descrição**: Elimina um filme específico da base de dados.

![image](https://github.com/user-attachments/assets/f148c553-d574-4eec-a425-799f61b53c70)

---

## XML

### Adicionar Filme

```
<Response>
    <Message>Filme adicionado com sucesso</Message>
    <Movie>
        <Title>Nome do Filme</Title>
        <Actor>Nome do Ator</Actor>
        <Duration>Duração</Duration>
        <Genre>Gênero</Genre>
    </Movie>
</Response>

```



