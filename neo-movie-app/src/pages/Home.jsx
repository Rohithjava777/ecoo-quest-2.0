import { MOCK_CATEGORIES } from '../utils/api';
import MovieCard from '../components/MovieCard';
import { Loader, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = ({ movies, loading, selectedMovie, setSelectedMovie, activeCategory, setActiveCategory, searchQuery }) => {
  
  const filteredMovies = movies.filter(movie => {
    if (searchQuery) {
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
             (movie.director && movie.director.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return true;
  });

  // Page entry animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
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
      {/* Featured Hero Area */}
      {!searchQuery && !loading && movies.length > 0 && (
        <div className="mb-10 w-full rounded-none neo-border bg-[#14002B] shadow-neo overflow-hidden relative h-[300px] hover:shadow-neo-lg transition-shadow">
          <img 
            src={movies[0].backdrop} 
            alt="Featured Movie" 
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
            <span className="bg-accentOrange text-white text-xs font-bold px-3 py-1 neo-border shadow-neo w-fit mb-3 flex items-center gap-2">
              <TrendingUp size={14} /> FEATURED PREMIERE
            </span>
            <h1 className="text-white text-4xl font-bold font-mono shadow-sm">{movies[0].title}</h1>
            <p className="text-gray-200 mt-2 max-w-2xl line-clamp-2">{movies[0].description}</p>
            <div className="mt-4 flex gap-4">
              <button 
                onClick={() => setSelectedMovie(movies[0])}
                className="neo-button-yellow border-borderBlack text-white"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Categories Horizontal Track */}
      <div className="mb-8 hidden md:block">
        <h2 className="font-bold text-lg font-mono mb-4 text-white">Categories</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {MOCK_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`neo-border px-4 py-1.5 font-bold text-sm whitespace-nowrap transition-all duration-200 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_rgba(0,0,0,1)] ${
                activeCategory === category 
                  ? 'bg-accentOrange text-white' 
                  : 'bg-[#14002B] text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Popular Section */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-6 border-b-2 border-borderBlack pb-2">
          <h2 className="font-bold text-2xl font-mono text-white">
            {searchQuery ? 'Search Results' : `Trending ${activeCategory === 'Everything' ? 'Now' : activeCategory}`}
          </h2>
          {!searchQuery && <a href="#" className="font-bold text-sm underline hover:text-accentOrange transition-colors">view all</a>}
        </div>
        
        {loading ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((skeleton) => (
              <div key={skeleton} className="bg-gray-200 animate-pulse neo-border h-[340px] w-full"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {filteredMovies.map(movie => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                isSelected={selectedMovie?.id === movie.id}
                onClick={() => setSelectedMovie(movie)}
              />
            ))}
          </div>
        )}
        
        {!loading && filteredMovies.length === 0 && (
          <div className="text-center py-20 font-mono text-gray-500 font-bold border-2 border-dashed border-gray-400 bg-[#14002B] shadow-neo">
            No results found for your search.
          </div>
        )}
      </div>

    </motion.div>
  );
};

export default Home;
