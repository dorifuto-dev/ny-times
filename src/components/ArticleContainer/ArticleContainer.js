import React, { useState } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard'
import './ArticleContainer.scss';

const ArticleContainer = ({ articles }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const articlesList = articles && articles.filter(article => {
    if (!searchQuery) {
      return article
    } else if (article.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return article
    }
  }).map(article => {
    return (
      <ArticleCard key={article.id} articleInfo={article} />
    )
  })

  return (
    <section className='article-container'>
      <h1 className='article-container-title'>New York Times Popular Articles</h1>
      <input className='search-input' value={searchQuery} placeholder='Search Articles' onChange={(event) => setSearchQuery(event.target.value)}></input>
      {searchQuery && <button className='clear-search' onClick={() => setSearchQuery('')}>Clear Search</button>}
      {articles && articlesList}
    </section>
  );
}

export default ArticleContainer;