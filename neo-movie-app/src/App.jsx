import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import RightPanel from './components/RightPanel';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Category from './pages/Category';
import { fetchTrending } from './utils/api';
import { AnimatePresence } from 'framer-motion';

// Inner App component so we can use useLocation for Framer Motion
const AppContent = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Everything');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchTrending();
        setMovies(data.results);
        if (data.results.length > 0) {
          setSelectedMovie(data.results[0]);
        }
      } catch (error) {
        console.error("Failed to load movies:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  return (
    <div className="flex w-full min-h-screen bg-bgCream text-white overflow-hidden relative font-sans selection:bg-accentYellow">
      <Sidebar />

      <div className="flex-1 ml-[220px] mr-[350px] min-h-screen flex flex-col pt-0 transition-all z-10 relative">
        <TopHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="flex-1 overflow-x-hidden overflow-y-auto p-8 relative scroll-smooth h-[calc(100vh-80px)]">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route 
                path="/" 
                element={
                  <Home 
                    movies={movies} 
                    loading={loading} 
                    selectedMovie={selectedMovie} 
                    setSelectedMovie={setSelectedMovie} 
                    activeCategory={activeCategory} 
                    setActiveCategory={setActiveCategory} 
                    searchQuery={searchQuery}
                  />
                } 
              />
              <Route 
                path="/category" 
                element={<Category />} 
              />
              <Route 
                path="/saved" 
                element={
                  <Saved 
                    selectedMovie={selectedMovie} 
                    setSelectedMovie={setSelectedMovie} 
                  />
                } 
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>

      <RightPanel selectedMovie={selectedMovie} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
