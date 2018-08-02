import React, {Component} from 'react';
import News from '../containers/News';

class Home extends Component {
    render() {
        return (
            <div>
                Home page
                <News/>
            </div>
        );
    }
}

export default Home;