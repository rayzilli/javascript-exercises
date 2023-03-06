//get array and return just the titles
const getTheTitles = function(books) {
  const allBooks =  books.map(books => books.title);
  return allBooks;
      
};

// Do not edit below this line
module.exports = getTheTitles;
