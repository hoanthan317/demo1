import React, {Component} from 'react';
import NewsItemListing from '../presentation/NewsItemListing';
import { connect } from 'react-redux';
import { fetchNews, addNews } from '../../actions/newsActions';

class News extends Component {
    componentDidMount(){
        this.props.dispatch(fetchNews());
    }

    render() {
        const newsItems = (this.props.news) ? this.props.news.map((news, i) => {
            return (
                <li key={i}><NewsItemListing data={news}/></li>
            );
        }) : null;

        return (
            <div>
                <h2>News</h2>
                <button onClick={() => {
                    this.props.dispatch(addNews({
                        title: 'Test add news',
                        teaser: 'Mad owl seen tormenting drivers in Morecambe'
                    }));
                }}>Create Mock Data</button>
                <ul>
                    { (this.props.error === false) ? (this.props.news !== undefined && this.props.news.length > 0 ? <ul>{newsItems}</ul> : <div>Sorry we have no news</div>) : <div>Sorry, An error has occured</div> }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        news: state.news.news,
        error: state.news.error
    }
}

export default connect(mapStateToProps)(News);