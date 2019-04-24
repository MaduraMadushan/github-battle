import React from 'react';
import PropTypes from 'prop-types';

const SelectLanguage = (props) => {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return ( 
        <ul className="languages">
            {languages.map(lang => 
                <li 
                    style={lang === props.selectedLanguage ? {color: '#d0021d'} : null}
                    onClick={() => props.updateLanguage(lang)}
                    key={lang}
                >
                {lang}</li>
            )}
        </ul> 
     );
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    updateLanguage: PropTypes.func.isRequired
}
 
export default SelectLanguage;