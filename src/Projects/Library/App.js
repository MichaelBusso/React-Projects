import './App.css';
import Book from './components/Book.jsx';

function App() {
  let books = [
    {
      title: 'Harry Potter',
      author: 'J. K. Rowling',
      sample: '"It does not do to dwell on dreams and forget to live." - Albus Dumbledore',
      chapters: 7,
      likes: 98,
      onshelf: true
    },
    {
      title: 'The Lord of the Rings',
      author: 'J. R. R. Tolkien',
      sample: '"Not all those who wander are lost." - J.R.R. Tolkien',
      chapters: 3,
      likes: 0,
      onshelf: true
    },
    {
      title: 'A Song of Ice and Fire',
      author: 'George R. R. Martin',
      sample: '"When you play the game of thrones, you win or you die." - Cersei Lannister',
      chapters: 7,
      likes: 0,
      onshelf: false
    }
  ];

  return (
    <div className="App">
      <h1>List of Books:</h1>
      {books.map((book, index) => (
        <Book book={book} index={index + 1} takeBook={() => book.onshelf = false}/>
      ))}
    </div>
  );
}

export default App;
