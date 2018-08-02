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
                if(data.status === 200 && data.data !== null) dispatch(newsPushed(data.data))
                else dispatch(newsPushed(false))
            });
        })
        .catch( (e) => {console.log(e); dispatch(newsPushed(false)) } );
    }
}