import React, { useState, Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Suggestion from '../CityArray/CityArrayJSON.json';

function CityArray(props) {
    const [activeSuggestion, setActiveSuggestion] = useState([]);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [userInput, setUserInput] = useState('');
    props.func(userInput);

    const onChangeHandler = e => {
        const suggestionsArray = Suggestion;
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        setFilteredSuggestions(suggestionsArray.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        ));

        setActiveSuggestion(0);
        setShowSuggestions(true);
        setUserInput(e.currentTarget.value);
    };

    const onClickHandler = e => {
        setActiveSuggestion(0);
        setFilteredSuggestions(0);
        setShowSuggestions(false);
        setUserInput(e.currentTarget.innerText);
    };

    const onKeyDownHandler = e => {
        // User pressed the enter key
        if (e.keyCode === 13) {
            setActiveSuggestion(0);
            setShowSuggestions(false);
            setUserInput(activeSuggestion);
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }
            setActiveSuggestion({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }
            setActiveSuggestion({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
            suggestionsListComponent = (
                <ul className='city-ul'>
                    {filteredSuggestions.map((suggestion, index) => {
                        let className;
                        // Flag the active suggestion with a class
                        if (index === activeSuggestion) {
                            className = 'suggestion-active';
                        }

                        return (
                            <li className={className} key={suggestion} onClick={onClickHandler}>
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            setUserInput('');
        }
    }

    return (
        <Fragment>
            <Form.Control
                className='city-input'
                type='text'
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
                value={userInput}
                name='event[city]'
                required
            />
            {suggestionsListComponent}
        </Fragment>
    );
}


export default CityArray