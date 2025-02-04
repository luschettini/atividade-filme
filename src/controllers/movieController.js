const Movie = require("../models/Movie");
const MovieList = require("../models/MovieList");

const lista = new MovieList();

const filme1 = new Movie('Diário de uma paixão', 'Ryan Gosling and Rachel McAdams', '02:30:00', 'Romance');
lista.addMovie(filme1);

lista.addMovie(new Movie('Como Eu Era Antes de Você', ' Emilia Clarke e Sam Claflin', '01:50:00', 'Drama'));

const router = {
    addMovie: (req, res) => {
        try {
            const { title, actor, duration, genders } =  req.body;
            if(!title || !actor || !duration || !genders) {
                throw new Error('Preencha todos os campos!')
            }
            const film = new Movie (title, actor, duration, genders)
            lista.addMovie(film);
            res.status(200).json({message: "Criado com sucesso", film });
        } catch (error) {
            res.status(400).json({message: "Erro ao adicionar um filme", error});
        }
    },

    getAllMovies: (req, res) => {
        try {
            const movies = lista.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar filmes', error});
        }
    },

    getMovieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getMovieById(id));
        } catch (error) {
            res.status(404).json({
                message: 'Erro ao buscar filme por id',
                error
            });
        }
    },

    updateMovie: (req, res) => {
        try {
            res.status(200).json(lista.updateMovie(req.params.id, req.body));
        } catch (error) {
            res.status(404).json('Erro ao atualizar', error)
        }
    },

    deleteMovie: (req, res) => {
        try {
            lista.deleteMovie(req.params.id);
            res.status(200).json({
                message: 'Filme deletado com sucesso'
            })
        } catch (error) {
            res.status(404).json('Erro ao deletar filme', error);
        }
    },


};

module.exports = router;