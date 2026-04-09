import { motion } from 'framer-motion';
import { Bookmark, Star } from 'lucide-react';

const MovieCard = ({ movie, isSelected, onClick }) => {
  return (
    <motion.div 
      layoutId={`card-${movie.id}`}
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-300 ${isSelected ? 'scale-105 z-10' : 'hover:scale-105 z-0'}`}
      whileHover={{ y: -5 }}
    >
      <div className={`bg-[#14002B] neo-border p-2 min-w-[200px] h-[340px] flex flex-col justify-between ${isSelected ? 'neo-shadow-lg ring-4 ring-accentYellow' : 'neo-shadow hover:shadow-neo-lg'}`}>
        
        {/* Image Container */}
        <div className="relative w-full h-[220px] neo-border overflow-hidden mb-2">
          <img 
            src={movie.poster} 
            alt={movie.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow">
          <h3 className="font-bold text-sm leading-tight line-clamp-2" title={movie.title}>
            {movie.title}
          </h3>
          <p className="text-xs text-gray-300 mt-1">{movie.author || movie.director || "Unknown"}</p>
          
          <div className="mt-auto flex justify-between items-center w-full">
            <div className="flex items-center gap-1 text-sm bg-[#4C1D95] px-1 rounded border border-borderBlack">
              <Star size={14} className="fill-accentYellow text-white" />
              <span className="font-bold">{movie.rating}</span>
            </div>
            <button className="p-1 hover:bg-[#2A054F] rounded transition-colors" title="Save to Watchlist">
              <Bookmark size={18} />
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default MovieCard;
