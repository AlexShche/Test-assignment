import { FC } from 'react'; // add import

export interface Book {
   id: string;
   name: string;
}

export const BooksList: FC<{ books: Book[] }> = ({ books }) => {
   return (
      <ul>
         {books.map((book) => (
            <li key={book.id}>{book.name}</li> // change key value
         ))}
      </ul>
   );
};

// answers

// 1. no import FC from react, and for key value it's better to use
// book.id - it will be unique key and when the array of Books is changed
// (deleted or other actions), the React will re-render without errors, if
// you use "i" as a key, then it will simply be the ordinal numbers of the array
// elements they have no uniqueness

// 2. add import "import { FC } from 'react'", and li should look like this
// "<li key={book.id}>{book.name}</li>"

// 3. if we don't add "import { FC } from 'react'" the Typescript compiler will
// throw an error and the code will not run, if you add the missing import, the
// code will work and key can be left as is, BUT there may be problems with this
// in the future, and it is better to replace the value in key with book.id