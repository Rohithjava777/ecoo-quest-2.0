import { useState, useEffect } from 'react';
import { fetchSavedMovies } from '../utils/api';
import MovieCard from '../components/MovieCard';
import { Loader, BookmarkCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Saved = ({ selectedMovie, setSelectedMovie }) => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchSavedMovies();
      setSavedMovies(data.results);
      setLoading(false);
    };
    loadData();
  }, []);

  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 20 }
  };

  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
      className="flex-1 w-full"
    >
      <div className="mb-8 flex items-center gap-4 border-b-4 border-borderBlack pb-4">
        <div className="p-3 bg-accentOrange neo-border shadow-neo">
          <BookmarkCheck size={32} className="text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold font-mono">Your Library</h1>
          <p className="text-gray-300 font-bold">Movies you have saved or downloaded.</p>
        </div>
      </div>

      {loading ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3].map((skeleton) => (
            <div key={skeleton} className="bg-gray-200 animate-pulse neo-border h-[340px] w-full"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {savedMovies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              isSelected={selectedMovie?.id === movie.id}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      )}
      
      {!loading && savedMovies.length === 0 && (
        <div className="text-center py-20 font-mono text-gray-500 font-bold border-2 border-dashed border-gray-400 bg-[#14002B] shadow-neo">
          You haven't saved any movies yet.
        </div>
      )}
    </motion.div>
  );
};

export default Saved;
