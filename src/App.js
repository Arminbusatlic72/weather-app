import "./App.css";
// import WeatherCard from "./components/WeatherCard";
import CitySelector from "./components/CitySelector";
import { Container } from "react-bootstrap";
import UseFetch from "./hooks/UseFetch";
import { baseUrl, apiKey } from "./config";
import WeatherList from "./components/WeatherList";
function App() {
  const { data, error, inProgress, setUrl } = UseFetch();
  console.log(data);
  const getContent = () => {
    if (error) return <h2>Error when fetching: {error}</h2>;
    if (!data && inProgress) return <h2>Loading...</h2>;
    if (!data) return null;
    return <WeatherList weathers={data.list} />;
  };

  return (
    <Container className="App">
      <CitySelector
        onSelectButtonClick={(city) => {
          setUrl(
            `${baseUrl}/data/2.5/forecast?q=${city}&cnt=6&appid=${apiKey}&units=metric`
          );
        }}
      />
      {getContent()}
    </Container>
  );
}

export default App;
