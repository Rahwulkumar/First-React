import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", features: "Classic, Coming-of-age", image: "/images/mockingbird.jpg" },
  { id: 2, title: "1984", author: "George Orwell", features: "Dystopian, Political fiction", image: "/images/1984.jpg" },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen", features: "Romance, Social commentary", image: "/images/pride.jpg" },
  { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", features: "Jazz Age, American Dream", image: "/images/gatsby.jpg" },
  { id: 5, title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", features: "Magical Realism, Family Saga", image: "/images/solitude.jpg" },
  { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger", features: "Coming-of-age, Alienation", image: "/images/catcher.jpg" },
  { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", features: "Fantasy, Adventure", image: "/images/hobbit.jpg" },
  { id: 8, title: "Brave New World", author: "Aldous Huxley", features: "Dystopian, Science Fiction", image: "/images/brave.jpg" },
  { id: 9, title: "The Alchemist", author: "Paulo Coelho", features: "Philosophical, Quest", image: "/images/alchemist.jpg" },
];

const BookCard = ({ book, isLiked, onLike }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-800">
    <img className="w-full h-48 object-cover" src={book.image} alt={book.title} onError={(e) => e.target.src = '/images/placeholder.jpg'} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-white">{book.title}</div>
      <p className="text-gray-400 text-base mb-2">by {book.author}</p>
      <p className="text-gray-500 text-sm">{book.features}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <button onClick={onLike} className="flex items-center">
        <Heart 
          className={`${isLiked ? 'text-red-500' : 'text-gray-400'} transition-all duration-300`}
          size={isLiked ? 28 : 24}
        />
      </button>
    </div>
  </div>
);

function App() {
  const [likedBooks, setLikedBooks] = useState({});

  const handleLike = (id) => {
    setLikedBooks(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-black min-h-screen">
      <h1 className="text-3xl font-bold text-center my-8 text-white">Book Collection</h1>
      <div className="flex flex-wrap justify-center">
        {books.map(book => (
          <BookCard 
            key={book.id} 
            book={book} 
            isLiked={likedBooks[book.id]} 
            onLike={() => handleLike(book.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;