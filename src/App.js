import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
      <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies}></Row>
    </div>
  );
}

export default App;
