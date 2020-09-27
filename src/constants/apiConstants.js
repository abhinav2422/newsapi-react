export default {
  NEWS: {
    SOURCES: {
      url: 'https://newsapi.org/v2/sources',
      method: 'GET',
      params: ['apiKey']
    },
    NEWS_LIST: {
      url: 'https://newsapi.org/v2/top-headlines',
      method: 'GET',
      params: ['sources', 'apiKey']
    }
  }
}
