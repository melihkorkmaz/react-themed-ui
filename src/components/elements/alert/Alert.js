import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { css } from 'aphrodite';
import { colors, styles } from '../../../utils/theme';
import { userProps } from '../../../utils/helpers';

import './alert.scss'

const Alert = props => {
    Alert.propTypes = {
        color: PropTypes.oneOf(Object.keys(colors)),
        outline : PropTypes.bool,
        rectangle : PropTypes.bool,
        shadow : PropTypes.bool
    };

    const classNameList = [
        'rtui-alert',  
        props.outline ? css(styles[`${props.color}-border`]) : css(styles[`${props.color}-background`]),
        props.rectangle ? 'rectangle' : '',
        props.shadow ? 'shadow' : ''
    ];
    const _props = userProps(props)(...Object.keys(Alert.defaultProps), 'className');

    return (
        <div {..._props}
        className={classnames(...classNameList)}
        >   
            {props.children}
        </div>
    )
}

Alert.defaultProps = {
    color: 'primary',
    outline : false,
    rectangle : false,
    shadow : false
}

export default Alert;