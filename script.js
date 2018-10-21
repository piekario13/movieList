var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czardzieju',
        cast: 'Występują: Imie Nazwisko, Imie Nazwisko',
        image: 'http://s3.viva.pl/newsy/plakat-filmu-harry-potter-zakon-feniksagalapagos-films-429093-movie_cover.jpg'
    },
    {
        id: 2,
        title: 'Król lew',
        desc: 'film o królu sawanny',
        cast: 'Występują: Imie Nazwisko, Imie Nazwisko',
        image: 'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXJKRXT/image?locale=fr-ca&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg'
    },
    {
        id: 3,
        title: 'Terminator',
        desc: 'film o terminatorze',
        cast: 'Występują: Imie Nazwisko, Imie Nazwisko',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51JxcK1PzrL._SY445_.jpg'
    }
];


var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('p', {}, movie.cast),
        React.createElement('img', {src: movie.image} )
      );
  });

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
  
ReactDOM.render(element, document.getElementById('app'));