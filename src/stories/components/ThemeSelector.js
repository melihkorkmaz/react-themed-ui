import React from 'react';
import { themes } from '../../utils/theme';
import { formatName } from '../../utils/helpers';
import PropTypes from 'prop-types';

const ThemeSelector = props => {

    return (
        <div>
            <label>Themes : </label>
            <select selected={props.theme} onChange={props.onThemeChanged}>
                {Object.keys(themes).map(theme => {
                    return (<option key={theme} value={theme.replace('Theme', '')}>{formatName(theme.replace('Theme', ''))}</option>)
                })}
            </select>
        </div>
    )
}

ThemeSelector.propTypes = {
    theme : PropTypes.string.isRequired,
    onThemeChanged : PropTypes.func.isRequired
}

export default ThemeSelector;