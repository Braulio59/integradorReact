import React, { useEffect } from "react";
import styled from "styled-components";

const NewsCard = ({ news }) => {
  useEffect(() => {}, []);

  const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #141514;
    border-radius: 3px;
    padding: 1rem;
    cursor: pointer;
  `;

  return (
    <CardContainer>
      <img style={{ maxHeight: "200px" }} src={news.multimedia[0].url} alt="" />

      <span>{news.title}</span>
    </CardContainer>
  );
};

export default NewsCard;
