module.exports = {
  
  movieAPI: {
    get: (req, res) => {
      res.status(200).send([{
        title: 'Star Wars',
        year: '1991',
        rating: 7.0,
        overview: 'Test file man',
        image: 'https://image.tmdb.org/t/p/w200/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg',
        search: true,
        watched: false,
        visibility: false
      }]);
    } 
  }

}
