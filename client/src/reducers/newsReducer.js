import constants from '../constants/actionTypes'

var initialState = {
  news: [],
  error: false
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

    default:
      return state;
    }
}