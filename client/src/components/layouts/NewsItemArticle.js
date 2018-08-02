import React, {Component} from 'react';
import NewsItemDetail from '../presentation/NewsItemDetail';
import { fetchItem, loadItem } from '../../actions/newsActions';
import { connect } from 'react-redux';

class NewsItemArticle extends Component {
    componentWillMount() {
        this.props.dispatch(loadItem());
    }
    componentDidMount(){
        setTimeout(() => {
            this.props.dispatch(fetchItem(this.props.match.params.id));
        }, 1000);
    }
    render() {
        var newsItem = this.props.newsItem;
        return (
            <div>
                <div>
                    <h1>Article</h1>
                </div>
                <div>
                    { this.props.loading === false ? (newsItem ? (newsItem.length > 0 ? <NewsItemDetail data={newsItem[0]} /> : <p>Sorry, article not found</p>) : <p>Sorry, article not found</p>) : <p>Loading...</p> }
                </div>
            </div>
        );
    }
}

var mapStateToProps = state => {
    return {
        newsItem: state.news.newsItem,
        error: state.news.error,
        loading: state.news.loading
    }
}

export default connect(mapStateToProps)(NewsItemArticle)