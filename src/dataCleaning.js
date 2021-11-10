import dayjs from 'dayjs'

export const cleanArticleData = (data) => {
  return data.results.map(article => {
    return {
      id: article.id,
      date: dayjs(article.published_date).format('MMMM D, YYYY'),
      updated: dayjs(article.updated).format('MMMM D, YYYY'),
      byline: article.byline,
      title: article.title,
      content: article.abstract
    }
  })
}