export const MOCK_MOVIES = [
  {
    id: 1,
    title: "The Matrix",
    author: "Lana Wachowski",
    year: "1999",
    rating: 4.9,
    reviews: "45.2K",
    duration: "2 hr 16 min",
    genre: "Sci-Fi, Action",
    director: "The Wachowskis",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png",
    backdrop: "https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png",
    trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
  },
  {
    id: 2,
    title: "Oppenheimer",
    author: "Kai Bird",
    year: "2023",
    rating: 4.9,
    reviews: "24.1K",
    duration: "3 hr 0 min",
    genre: "Biography, Drama",
    director: "Christopher Nolan",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    backdrop: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/A_Night_of_Fire_and_Ice.jpg/1280px-A_Night_of_Fire_and_Ice.jpg",
    trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg"
  },
  {
    id: 3,
    title: "The Batman",
    author: "Bob Kane",
    year: "2022",
    rating: 4.7,
    reviews: "18.2K",
    duration: "2 hr 56 min",
    genre: "Action, Crime",
    director: "Matt Reeves",
    description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    poster: "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg",
    backdrop: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Rain_drops_on_window.jpg/1280px-Rain_drops_on_window.jpg",
    trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4"
  },
  {
    id: 4,
    title: "Blade Runner 2049",
    author: "Philip K. Dick",
    year: "2017",
    rating: 4.8,
    reviews: "15.4K",
    duration: "2 hr 44 min",
    genre: "Sci-Fi, Drama",
    director: "Denis Villeneuve",
    description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png",
    backdrop: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/M101_hires_STScI-PRC2006-10a.jpg/1280px-M101_hires_STScI-PRC2006-10a.jpg",
    trailer: "https://www.youtube.com/watch?v=gCcx85zbxz4"
  },
  {
    id: 5,
    title: "Everything Everywhere",
    author: "Daniel Kwan",
    year: "2022",
    rating: 4.9,
    reviews: "21.9K",
    duration: "2 hr 19 min",
    genre: "Action, Comedy",
    director: "Daniel Kwan, Daniel Scheinert",
    description: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence.",
    poster: "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg",
    backdrop: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Night_sky_over_the_Sahara_Desert_in_Tunisia.jpg/1280px-Night_sky_over_the_Sahara_Desert_in_Tunisia.jpg",
    trailer: "https://www.youtube.com/watch?v=wxN1T1uxQ2g"
  },
  {
    id: 6,
    title: "Interstellar",
    author: "Jonathan Nolan",
    year: "2014",
    rating: 4.9,
    reviews: "35.2K",
    duration: "2 hr 49 min",
    genre: "Sci-Fi, Drama",
    director: "Christopher Nolan",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    backdrop: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  }
];

export const MOCK_CATEGORIES = [
  "Everything",
  "Movies",
  "TV Shows",
  "Documentaries",
  "Animation",
  "Shorts",
  "Classics",
  "Sci-Fi",
  "Action"
];

// TMDB API Utility Structure 
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
// const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchTrending = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ results: MOCK_MOVIES });
    }, 600); // reduced delay for snappiness
  });
};

export const fetchSavedMovies = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Return 3 specifically for the saved page
      resolve({ results: MOCK_MOVIES.slice(1, 4) });
    }, 400); 
  });
};
