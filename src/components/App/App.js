import { Route, Routes } from 'react-router-dom';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import React from 'react';
import './App.scss';

const App = () => {
  return (
    <main className='app-main'>
      <Routes>
        <Route exact path='/'
          element={<ArticleContainer />} 
        />
        <Route exact path='/:id'
          element={<ArticleDetails />}
        />
      </Routes>
    </main>
  );
}

export default App;
