import React from 'react';
import PropTypes from 'prop-types';
import './NewsItem.css';

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-app">
      <div className='news-item'>
        <img className='news-img' src={urlToImage} alt={title} />
        <h3 className='news-title'><a href={url} rel="noopener noreferrer" target="_blank">{title}</a></h3>
        <p className='news-description'>{description}</p>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
};

export default NewsItem;