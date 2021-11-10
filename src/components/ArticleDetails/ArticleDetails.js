import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ArticleDetails.scss';

const ArticleDetails = ({details}) => {

  let { id } = useParams()

  return (
    <section className='article-details'>
      <p>{id}</p>
      <p>{details}</p>
    </section>
  );
}

export default ArticleDetails;