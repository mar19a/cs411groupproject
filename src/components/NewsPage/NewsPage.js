import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=massachusetts&from=2023-03-10&sortBy=publishedAt&apiKey=1cbb1ed4bef44f50ad4016f01131e3e4`);
        setArticles(response.data.articles);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles();
  }, []);

  return (
    <div className='news-page'>
      <h1 className='news-page-title'>Latest News from Massachusetts</h1>
      <div className='news-list'>
        {articles.map((article, index) => (
          <NewsItem
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;