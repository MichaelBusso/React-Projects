import styles from './Book.module.css';
import { useState } from 'react';

const Book = (props) => {

  const [, setShelf] = useState(props.book.onshelf);
  const [, setLikes] = useState(props.book.likes);

  return (
    <div className={props.book.onshelf ? styles.on_the_shelf : styles.out_of_the_stock}
    id={styles[props.book.title]}>

      <h4>{props.index}</h4>
      <h2 className={props.book.likes >= 100 && styles.more_then_100_likes}>{props.book.title}</h2>
      <p>by {props.book.author}</p>
      <p>{props.book.likes}</p>
      <button onClick={() => alert(props.book.sample)}>Click here</button>
      <button onClick={() => setLikes(++props.book.likes)}>Like</button>
      {props.book.onshelf && <button onClick={() => setShelf(props.takeBook)}>Take the Book</button>}

    </div>
  );
};

export default Book;
