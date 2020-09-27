import appConstants from '../constants/appConstants';

const initialState = {
  loading: false,
  sources: [],
  error: '',
  news: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case appConstants.GET_SOURCES_INIT:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case appConstants.GET_SOURCES_SUCCESSFUL:
      return {
        ...state,
        sources: action.payload,
        loading: false
      };
    case appConstants.GET_SOURCES_FAILED:
      return {
        ...state,
        loading: false,
        error: "There was some error, please try again"
      };
    case appConstants.GET_NEWS:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case appConstants.GET_NEWS_SUCCESSFUL:
      return {
        ...state,
        news: action.payload,
        loading: false
      };
    case appConstants.GET_NEWS_FAILED:
      return {
        ...state,
        loading: false,
        error: "There was some error, please try again"
      };
    case appConstants.SHOW_FAV_NEWS:
      return {
        ...state,
        news: action.payload
      }
    default:
      return state;
  }
}
