import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [dark, setDark] = useState(false);

  const API_URL = "https://api.sampleapis.com/movies/comedy";
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMovies(data);
      } catch (error: unknown) {
        console.log(error);
      }
    };

    getMovies();
  }, []);

  const handleTheme = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "bg-gray-950 text-white" : "bg-white"}>
      <nav
        className={`${
          !dark ? "bg-gray-950 text-white" : "bg-gray-100 text-black"
        } px-2 py-4`}
      >
        <div className="flex justify-around">
          <h1 className="font-bold tracking-widest text-2xl">MOVIE-WEB</h1>
          <button
            onClick={handleTheme}
            className={`tracking-widest text-xl ${
              !dark ? "bg-white text-black" : "bg-black text-white"
            } px-2 py-1 rounded-lg`}
          >
            {!dark ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </nav>

      <div className="w-5/6 mx-auto mt-8">
        <div className="grid grid-cols-2 gap-4">
          {movies.map((movie) => (
            <div key={movie.imdbId} className="flex justify-between">
              <div className="flex">
                <img
                  src={movie.posterURL}
                  alt={movie.title}
                  className="w-40 h-40 rounded-lg"
                />
                <div className="ml-4">
                  <p className="text-gray-100 bg-gray-600 w-fit rounded-full px-2 py-1">
                    {movie.imdbId}
                  </p>
                  <h2 className="text-2xl font-bold">{movie.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
