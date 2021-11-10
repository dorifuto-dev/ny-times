import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { LoremIpsum } from 'lorem-ipsum';
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

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  })

  return (
    <section className='article-details'>
      {selectedArticle && 
        <>
          <h1 className='detail-title'>{selectedArticle.title}</h1>
          <p className='detail-author'>{selectedArticle.byline}</p>
          <p className='detail-published'>{`Published on ${selectedArticle.date}`}</p>
          <div className='content-container'>
            <span className='detail-content'>{selectedArticle.content}</span>
            <span className='detail-lorem'>{lorem.generateParagraphs(4)}</span>
          </div>
          <Link className='back-home' to='/'>Back to Home</Link>
        </>}
    </section>
  );
}

export default ArticleDetails;