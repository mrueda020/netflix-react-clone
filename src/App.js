import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "./axios";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log(requests.fetchCategories);
      const request = await axios.get(`${requests.fetchCategories}`);
      const categories = request.data.genres;
      setCategories(categories);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top rated" fetchUrl={requests.fetchTopRated}></Row>
      {categories.map((categorie) => {
        return (
          <Row
            title={`${categorie.name}`}
            fetchUrl={`${requests.fetchCategorie}${categorie.id}`}
          ></Row>
        );
      })}
    </div>
  );
}

export default App;
