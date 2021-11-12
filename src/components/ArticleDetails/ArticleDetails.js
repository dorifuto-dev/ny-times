import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import './ArticleDetails.scss';

const ArticleDetails = ({articles}) => {

  const [selectedArticle, setSelectedArticle] = useState(null)

  const { id } = useParams('id')

  useEffect(() => {
    startDetails()
  }, [articles])

  const startDetails = () => {
    if (articles) {
      const currentArticle = articles.find(article => id == article.id)
      setSelectedArticle(currentArticle)
    }
  }

  return (
    <section className='article-details'>
      {selectedArticle && 
        <>
          <h1 className='detail-title'>{selectedArticle.title}</h1>
          <p className='detail-author'>{selectedArticle.byline}</p>
          <p className='detail-published'>{`Published on ${selectedArticle.date}`}</p>
          <div className='content-container'>
            <p className='detail-content'>{selectedArticle.content}</p>
          </div>
          <div className='detail-links'>
            <a className='ny-times-link' target='_blank' href={selectedArticle.url}>View article on www.nytimes.com</a>
            <Link className='back-home' to='/'>Back to Home</Link>
          </div>
        </>}
    </section>
  );
}

export default ArticleDetails;