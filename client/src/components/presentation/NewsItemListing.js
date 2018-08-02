import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class NewsItemListing extends Component {
    render() {
        return (
            <div>
                <div>
                    <div><Link to={`/news/${this.props.data.id}`}><b>{this.props.data.title} - Id: {this.props.data.id}</b></Link></div>
                    <div>{this.props.data.teaser}</div>
                </div>
            </div>
        );
    }
}

NewsItemListing.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        teaser: PropTypes.string.isRequired
    })
};

export default NewsItemListing;