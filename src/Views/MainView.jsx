import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../Components/NewsCard";
import styled from "styled-components";

const MainView = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);
  console.log(news);
  const fetchNews = async () => {
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=qkKbInStoXtJ1h4dAv7ILP13Eo4xPG1l"
      );
      console.log(data);
      const soccerNews = data.results.filter((f) => f.subsection === "soccer");
      setNews(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const renderNews = news.map((n) => <NewsCard news={n} />);

  const NewsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 1rem;
  `;

  return <NewsContainer>{renderNews}</NewsContainer>;
};

export default MainView;
