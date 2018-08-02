import constants from '../constants/actionTypes'

var initialState = {
  news: [],
  error: false,
  newsItem: undefined,
  loading: false
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state)

  switch(action.type) {

    case constants.NEWS_RECEIVED:
      if(action.news === false) updated['error'] = true
      else updated['news'] = action.news;
      return updated;

    case constants.NEWS_ADDED:
      if(action.news === false) updated['error'] = true
      else updated['news'] = [...updated.news, action.news];
      return updated;

    case constants.NEWS_ITEM_RECEIVED:
      if(action.news === false) updated['error'] = true
      else {
        updated['loading'] = false;
        updated['newsItem'] = action.news;
      }
      return updated;

    case constants.NEWS_LOADING:
      updated['loading'] = true;
      return updated;

    default:
      return state;
    }
}