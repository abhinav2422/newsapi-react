import axios from 'axios';

import appConstants from '../constants/appConstants';
import apiConstants from '../constants/apiConstants';

export const fetchSources = () => async (dispatch) => {
  dispatch({ type: appConstants.GET_SOURCES_INIT });

  try {
    const result = await axios({
      method: apiConstants.NEWS.SOURCES.method,
      url: apiConstants.NEWS.SOURCES.url
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