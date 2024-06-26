const movies = [{
    _id: `1`,
    title: 'Home Alone',
    genre: '23ew',
    director: 'Ivam',
    year: '2002',
    imgUrl: '/img/the-little-mermaid.jpg',
    rating: '6',
    description: `The youngest of King Triton's`
}];

exports.getAll = () => {
    return movies.slice();
};

exports.create = (movieData) => {
    movieData._id= movies[movies.length - 1]._id + 1;
    movies.push(movieData);
};

exports.search = (title, genre, year) => {
    let result = movies.slice();

    if (title) {
        result = result.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (genre) {
        result = result.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    }

    if (year) {
        result = result.filter(movie => movie.year === year);
    }

    return movies;
};

exports.getOne = (movieId) => {
   const movie =  movies.find(movie => movie._id == movieId);

   return movie;
};