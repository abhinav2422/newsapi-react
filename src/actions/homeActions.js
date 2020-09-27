import axios from 'axios';

import appConstants from '../constants/appConstants';
import apiConstants from '../constants/apiConstants';

export const fetchSources = () => async (dispatch) => {
  dispatch({ type: appConstants.GET_SOURCES_INIT });

  try {
    const result = await axios({
      method: apiConstants.NEWS.SOURCES.method,
      url: apiConstants.NEWS.SOURCES.url,
      params: { apiKey: '5a106951412b451d9c1e5ed9f4cd645f' }
    });

    dispatch({
      type: appConstants.GET_SOURCES_SUCCESSFUL,
      payload: result.data.sources
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: appConstants.GET_SOURCES_FAILED,
    })
  }
}

export const fetchNews = (source = '') => async (dispatch) => {
  dispatch({ type: appConstants.GET_NEWS });

  try {
    const params = source ? {
      sources: source,
      apiKey: '5a106951412b451d9c1e5ed9f4cd645f'
    } : {
        category: 'general',
        apiKey: '5a106951412b451d9c1e5ed9f4cd645f'
      }

    const result = await axios({
      method: apiConstants.NEWS.NEWS_LIST.method,
      url: apiConstants.NEWS.NEWS_LIST.url,
      params
    });

    dispatch({
      type: appConstants.GET_NEWS_SUCCESSFUL,
      payload: result.data.articles
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: appConstants.GET_NEWS_FAILED,
    })
  }
}
