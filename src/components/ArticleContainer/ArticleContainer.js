import React, { useState } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import Loader from 'react-loader-spinner';
import './ArticleContainer.scss';

const ArticleContainer = ({ articles, isLoading }) => {
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
      <input className='search-input' value={searchQuery} placeholder='Search Articles' onChange={(event) => setSearchQuery(event.target.value)}></input>
      {searchQuery && <button className='clear-search' onClick={() => setSearchQuery('')}>Clear Search</button>}
      {(!isLoading) ? articlesList : 
        <Loader
          className='spinner-loader'
          type='Oval'
          color='#00BFFF'
          height={100}
          width={100}
        />}
    </section>
  );
}

export default ArticleContainer;