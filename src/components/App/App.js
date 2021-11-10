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
    setIsLoading(false)
  }

  return (
    <main className='app-main'>
      <Routes>
        <Route exact path='/'
          element={<ArticleContainer articles={allArticles}/>} 
        />
        <Route exact path='/:id'
          element={<ArticleDetails />}
        />
      </Routes>
    </main>
  );
}

export default App;
