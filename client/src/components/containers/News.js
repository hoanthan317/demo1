import React, {Component} from 'react';
import NewsItemListing from '../presentation/NewsItemListing';

class News extends Component {
    render() {
        return (
            <div>
                <h2>New Items</h2>
                <ul>
                    <li><NewsItemListing id="1" title="Title 1" teaser="Teaser 1" /></li>
                    <li><NewsItemListing id="2" title="Title 2" teaser="Teaser 2" /></li>
                </ul>
            </div>
        );
    }
}

export default News;