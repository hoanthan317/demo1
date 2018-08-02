import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewsItemDetail extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.data.title} - Id: {this.props.data.id}</h2>
                <p>{this.props.data.teaser}</p>
            </div>
        );
    }
}

NewsItemDetail.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        teaser: PropTypes.string.isRequired
    })
}

export default NewsItemDetail;