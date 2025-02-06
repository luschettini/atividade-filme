class MovieList {
    constructor() {
        this.movies = [];
    }

    //Adiciona um filme na lista
    addMovie(movie) {
        this.movies.push(movie);
    }

    //Retorna todos os filmes
    getAllMovies() {
        return this.movies;
    }

    //Retorna um filme pelo id
    getMovieById(id) {
        const movie = this.movies.find((movie) => movie.id == id);
        if (!movie) {
            throw new Error("Filme não encontrado");
        }
        return movie;
    }

    //Atualiza um filme pelo id
    updateMovie(id, updateData) {
        const movie = this.getMovieById(id);
        Object.assign(movie, updateData);
        return movie;
    }
 
    //Deleta um filme pelo id
    deleteMovie(id) {
        this.movies = this.movies.filter((movie) => movie.id != id);
    }

    //Retorna a quantidade total de filmes
    getTotalMovies() {
        return this.movies.length;
    }

}

module.exports = MovieList;
