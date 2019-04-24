import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import queryString from 'query-string';
import {battle} from './../utils/api';

import Player from './Player';
import Loading from './Loading';

class Results extends Component {
    state = {
        winner: null,
        loser: null,
        error: null,
        loading: true
    }

    componentDidMount() {
        const players = queryString.parse(this.props.location.search);
        battle.battle([
            players.playerOneName,
            players.playerTwoName
        ]).then((results) => {
            if(results === null){
            return this.setState(() => {
                return {
                    error: 'Looks like there was error. Check that both users exist on Github',
                    loading: false
                }
                })
            }
            this.setState(() => {
                return {
                    error: null,
                    winner: results[0],
                    loser: results[1],
                    loading: false
                }
            })
        })
    }

    render() { 
        const error = this.state.error;
        const winner = this.state.winner;
        const loser = this.state.loser;
        const loading = this.state.loading;

        if(loading === true) {
            return <Loading />
        }

        if(error) {
            return (
                <div>
                    <p>{error}</p>
                    <Link to='/battle'>Reset</Link>
                </div>
            )
        }
        return ( 
            <div className="row">
                <Player 
                    label='Winner'
                    score={winner.score}
                    profile={winner.profile}
                />
                <Player 
                label='Loser'
                score={loser.score}
                profile={loser.profile}
            />
            </div>
         );
    }
}
 
export default Results;