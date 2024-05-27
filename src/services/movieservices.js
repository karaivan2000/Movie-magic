const movies = [{
    title: 'Home Alone',
genre: '23ew',
director: 'Ivam',
date: '2002',
imgUrl: '/img/the-little-mermaid.jpg',
rating: '6',
description: `The youngest of King Triton's`

}];

exports.create = (movieData) => {
    console.log(movieData);
    movies.push(movieData);
}