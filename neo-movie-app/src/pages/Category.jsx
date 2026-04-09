import { motion } from 'framer-motion';
import { MOCK_CATEGORIES } from '../utils/api';
import { Sparkles, Ghost, Swords, Heart, Rocket } from 'lucide-react';

const Category = () => {
  const getIcon = (category) => {
    switch(category) {
      case 'Sci-Fi': return <Rocket size={40} />;
      case 'Action': return <Swords size={40} />;
      case 'Romance': return <Heart size={40} />;
      case 'Horror': return <Ghost size={40} />;
      default: return <Sparkles size={40} />;
    }
  };

  const getColors = (index) => {
    const colors = [
      'bg-accentYellow hover:shadow-glow',
      'bg-accentOrange text-white hover:shadow-glow-orange',
      'bg-[#B2F5EA] hover:shadow-glow', // Teal
      'bg-[#FBB6CE] hover:shadow-glow-orange', // Pink
      'bg-[#D6BCFA] hover:shadow-glow', // Purple
      'bg-[#14002B] hover:shadow-neo-lg'
    ];
    return colors[index % colors.length];
  };

  const pageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.05 }
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
      <div className="mb-10">
        <h1 className="text-4xl font-bold font-mono mb-2">Explore Genres</h1>
        <p className="text-xl font-bold text-gray-300 mb-8 border-b-4 border-borderBlack pb-4">
          Discover your next favorite masterpiece.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {MOCK_CATEGORIES.filter(c => c !== 'Everything').map((category, idx) => (
            <motion.div
              key={category}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className={`h-[150px] cursor-pointer border-2 border-borderBlack flex flex-col items-center justify-center transition-all ${getColors(idx)} shadow-[4px_6px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[6px] active:translate-x-[4px]`}
            >
              <div className="mb-2 opacity-80">{getIcon(category)}</div>
              <span className="font-extrabold text-2xl font-display tracking-widest uppercase">{category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Category;
