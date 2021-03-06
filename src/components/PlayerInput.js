import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends Component {
    state = {
        username: ''
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({username: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.props.id, this.state.username)
    }

    render() { 
        return ( 
            <form className='column' onSubmit={this.handleSubmit}>
                <label className='header' htmlFor='username'>{this.props.label}</label>
                <input 
                    id='username'
                    placeholder='github username'
                    type="text"
                    autoComplete="off"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <button className='battle' type='submit' disabled={!this.state.username}>Submit</button>
            </form>
         );
    }
}

PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}
 
export default PlayerInput;