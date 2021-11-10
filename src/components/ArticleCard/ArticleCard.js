import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleCard.scss';

const ArticleCard = ({articleInfo}) => {
  return (
    <Link to={`/${articleInfo.id}`} className="article-card-link">
      <section className="article-card">
        <h1 className="article-card-title">{articleInfo.title}</h1>
        <p className="article-card-content"></p>
      </section>
    </Link>
  );
}

export default ArticleCard;