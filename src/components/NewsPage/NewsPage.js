import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
const NewsPage = () => {

  const [articles, setArticles] = useState([])
  useEffect(() => {
    const getArticles = async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=massachusetts&from=2023-02-24&sortBy=publishedAt&apiKey=1cbb1ed4bef44f50ad4016f01131e3e4`)
        setArticles(response.data.articles)
        console.log(response)
    }
    getArticles()
  }, [])
  return (
    <div>
            {articles.map(article => {
                return(
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
  );
}

export default NewsPage;
