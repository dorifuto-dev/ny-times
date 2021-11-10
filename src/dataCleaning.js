export const cleanArticleData = (data) => {
  return data.results.map(article => {
    return {
      id: article.id,
      date: article.published_date,
      updated: article.updated,
      byline: article.byline,
      title: article.title,
      content: article.abstract
    }
  })
}