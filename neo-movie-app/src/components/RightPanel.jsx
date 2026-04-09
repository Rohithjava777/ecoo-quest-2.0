import { motion, AnimatePresence } from 'framer-motion';
import { Play, Download, BookmarkPlus, ListPlus, Star } from 'lucide-react';

const RightPanel = ({ selectedMovie }) => {
  return (
    <div className="w-[350px] min-h-screen bg-navCream border-l-2 border-borderBlack fixed right-0 top-0 pt-[80px] flex flex-col z-10 overflow-y-auto overflow-x-hidden">
      <AnimatePresence mode="wait">
        {selectedMovie ? (
          <motion.div
            key={selectedMovie.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6 flex flex-col h-full"
          >
            {/* Header / Poster area */}
            <div className="flex gap-4 items-start mb-6">
              <div className="w-[100px] h-[140px] shrink-0 neo-border bg-[#14002B] p-1 shadow-neo">
                <img 
                  src={selectedMovie.poster} 
                  alt={selectedMovie.title} 
                  className="w-full h-full object-cover border border-borderBlack"
                />
              </div>
              <div className="flex flex-col pt-2">
                <h2 className="font-bold text-lg leading-tight mb-1">{selectedMovie.title}</h2>
                <p className="text-xs font-mono text-gray-300 mb-1">
                  By: <span className="font-semibold text-white">{selectedMovie.director || selectedMovie.author || 'Unknown'}</span>
                </p>
                <div className="flex gap-2 text-xs font-bold bg-[#4C1D95] max-w-fit px-2 py-0.5 rounded border border-borderBlack items-center mt-1">
                  <Star size={12} className="fill-accentYellow text-white"/> 
                  <span>{selectedMovie.rating}</span>
                </div>
              </div>
            </div>

            {/* Trial CTA */}
            <button 
              onClick={() => window.open(selectedMovie.trailer || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
              className="w-full neo-border bg-[#14002B] text-center py-2 font-bold mb-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all text-sm cursor-pointer"
            >
              Watch Trailer
            </button>

            {/* Primary CTA with true box-shadow depth */}
            <button 
              onClick={() => window.open(selectedMovie.trailer || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
              className="w-full mb-6 flex items-center justify-center gap-2 group bg-accentOrange border-2 border-borderBlack py-4 text-white font-extrabold uppercase tracking-wide hover:bg-[#ff7b4d] shadow-[4px_6px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[6px] active:translate-x-[4px] transition-all"
            >
              <Play size={20} className="fill-white group-hover:scale-110 transition-transform" />
              PLAY NOW
            </button>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-0 border-2 border-borderBlack bg-[#14002B] mb-6">
              <div className="flex flex-col items-center justify-center py-3 border-r-2 border-borderBlack hover:bg-[#2A054F] cursor-pointer transition-colors group">
                <Download size={20} className="mb-1 group-hover:-translate-y-1 transition-transform" />
                <span className="text-[10px] font-bold">Download</span>
              </div>
              <div className="flex flex-col items-center justify-center py-3 border-r-2 border-borderBlack hover:bg-[#2A054F] cursor-pointer transition-colors group">
                <BookmarkPlus size={20} className="mb-1 group-hover:-translate-y-1 transition-transform" />
                <span className="text-[10px] font-bold">Save</span>
              </div>
              <div className="flex flex-col items-center justify-center py-3 hover:bg-[#2A054F] cursor-pointer transition-colors group">
                <ListPlus size={20} className="mb-1 group-hover:-translate-y-1 transition-transform" />
                <span className="text-[10px] font-bold">Add to List</span>
              </div>
            </div>

            {/* Meta details */}
            <div className="text-xs font-mono mb-6 space-y-2 pb-6 border-b-2 border-borderBlack">
              <div className="grid grid-cols-[80px_1fr]">
                <span className="text-gray-300">Rating</span>
                <span className="font-bold flex items-center gap-1">
                  <div className="flex text-accentOrange">★★★★★</div> 
                  ({selectedMovie.reviews || '1.5K'})
                </span>
              </div>
              <div className="grid grid-cols-[80px_1fr]">
                <span className="text-gray-300">Length</span>
                <span className="font-bold">{selectedMovie.duration || '2 hr 10 min'}</span>
              </div>
              <div className="grid grid-cols-[80px_1fr]">
                <span className="text-gray-300">Format</span>
                <span className="font-bold">{selectedMovie.genre || 'Movie'}</span>
              </div>
              <div className="grid grid-cols-[80px_1fr]">
                <span className="text-gray-300">Released</span>
                <span className="font-bold">{selectedMovie.year || '2023'}</span>
              </div>
            </div>

            {/* Synopsis */}
            <div className="text-sm font-mono leading-relaxed pb-8">
              <p>{selectedMovie.description || "A placeholder description for this movie. The story follows incredible characters through a journey of emotion and spectacle."}</p>
            </div>
            
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full opacity-50 p-6 text-center">
            <Play size={48} className="mb-4 text-gray-400" />
            <p className="font-bold">Select a movie to view details</p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RightPanel;
