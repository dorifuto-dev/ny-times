import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleCard.scss';

const ArticleCard = (props) => {
  return (
    <Link to={`/${article.id}`} className="article-card-link">
      <section className="article-card">
        <p className="article-card-heading"></p>
        <p className="article-card-content"></p>
      </section>
    </Link>
  );
}

export default ArticleCard;