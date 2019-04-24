import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';

class Player extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className='header'>{this.props.label}</h1>
                <h3 style={{textAlign: 'center'}}>Score: {this.props.score}</h3>
                <Profile info={this.props.profile}/>
            </div>
         );
    }
}

Player.propTypes = {
    label: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    profile: PropTypes.object.isRequired
}
 
export default Player;