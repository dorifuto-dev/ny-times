import { Route, Routes, useParams } from 'react-router-dom';
import { fetchPopularArticles } from '../../apiCalls';
import { cleanArticleData } from '../../dataCleaning';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import React, { useEffect, useState } from 'react';
import './App.scss';

const App = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [allArticles, setAllArticles] = useState(null);
  const [articlesError, setArticlesError] = useState(null);

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    setIsLoading(true)
    await fetchPopularArticles()
      .then(data => cleanArticleData(data))
      .then(data => setAllArticles(data))
      .catch(error => setArticlesError(error.message));
    setTimeout(() => {setIsLoading(false)}, 1000);
  }

  return (
    <main className='app-main'>
      <h1 className='article-container-title'>New York Times Popular Articles</h1>

      <Routes>
        <Route exact path='/'
          element={<ArticleContainer articles={allArticles} isLoading={isLoading}/>} 
        />
        <Route exact path='/:id'
          element={<ArticleDetails articles={allArticles} />}
        />
      </Routes>
    </main>
  );
}

export default App;
