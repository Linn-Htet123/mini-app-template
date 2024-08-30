import Typography from "./components/Typography";
import useMovies from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();
  return (
    <div>
      <Typography color="red">Helo world</Typography>
      {movies}
    </div>
  );
}

export default App;
