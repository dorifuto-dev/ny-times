export const fetchPopularArticles = () => {
  return fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=z9m1PefYQvBWOZQW7IO1gsVWad6AaqfR')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else if (!response.ok) {
        throw new Error('Something went wrong. Please try again later.')
      }
  })
}