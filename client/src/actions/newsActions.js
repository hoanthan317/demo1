import actionTypes from '../constants/actionTypes';

function newsReceived(news) {
    return {
        type: actionTypes.NEWS_RECEIVED,
        news: news
    };
}

function newsPushed(news){
    return {
        type: actionTypes.NEWS_ADDED,
        news: news
    };
}

function newsItemReceived(news){
    return {
        type: actionTypes.NEWS_ITEM_RECEIVED,
        news: news
    }
}

function loadArticle() {
    return {
        type: actionTypes.NEWS_LOADING
    }
}

export function fetchNews(){
    return dispatch => {
        return fetch(`http://localhost:8080/news`)
        .then( (response) => response.json() )
        .then( (data) => {
            if(data.status === 200) dispatch(newsReceived(data.data))
            else dispatch(newsReceived(false))
        })
        .catch( (e) => {
            console.log(e);
            dispatch(newsReceived(false))
        });
    }    
};

export function addNews(news){
    return dispatch => {
        return fetch(`http://localhost:8080/news/post`, {
            method:'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(news)
        })
        .then((response) => { 
            response.json().then((data) => {
                if(data.status === 200 && data.data !== {}) dispatch(newsPushed(data.data))
                else dispatch(newsPushed(false))
            });
        })
        .catch( (e) => {console.log(e); dispatch(newsPushed(false)) } );
    }
}

export function fetchItem(id){
    return dispatch => {
        return fetch(`http://localhost:8080/news/${id}`).then((response) => {
            response.json().then((data) => {
                if(data.status === 200 && data.data !== {}) dispatch(newsItemReceived(data.data))
                else dispatch(newsItemReceived(false))
            })
        })
    }
}

export function loadItem(){
    return dispatch => {
        dispatch(loadArticle());
    }
}