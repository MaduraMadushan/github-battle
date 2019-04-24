import React, { Component } from 'react';

import SelectLanguage from './SelectLanguage';
import RepoGrid from './RepoGrid';
import { fetchPopularRepos } from './../utils/api';
import Loading from './Loading';

class Popular extends Component {
    state = { 
        selectedLanguage: 'All',
        repos: null
     };

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage = (lang) => {
        this.setState({
                selectedLanguage: lang,
                repos: null
            })

        fetchPopularRepos(lang).then((repos) => (this.setState({repos})));
    }

    render() { 
        
        return ( 
            <div>
                <SelectLanguage 
                    selectedLanguage={this.state.selectedLanguage} 
                    updateLanguage={this.updateLanguage}/>
                {!this.state.repos ? <Loading /> :  <RepoGrid repos={this.state.repos} />}
            </div>
        );
    }
}
 
export default Popular;