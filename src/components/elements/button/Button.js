import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { css } from 'aphrodite';
import { colors, styles } from '../../../utils/theme';
import { userProps } from '../../../utils/helpers';

import './button.scss'

const Button = props => {
    Button.propTypes = {
        color: PropTypes.oneOf(Object.keys(colors)),
        size : PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge']),
        block : PropTypes.bool,
        outline : PropTypes.bool,
        rectangle : PropTypes.bool,
        pill : PropTypes.bool,
        shadow : PropTypes.bool
    };

    const classNameList = [
        'rtui-button',
        props.className,
        props.size,
        props.block ? 'block' : '', 
        props.outline ? css(styles[`${props.color || 'primary'}-border-hover`]) : css(styles[`${props.color || 'primary'}-background-hover`]),
        props.rectangle ? 'rectangle' : '',
        props.pill ? 'pill' : '',
        props.shadow ? 'shadow' : ''
    ];
    
    const _props = userProps(props)(...Object.keys(Button.propTypes), 'className');

    return (
        <button 
            {..._props}
            className={classnames(...classNameList)}
        >
            {props.children}
        </button>
    )
}

// Button.defaultProps = {
//     color: 'primary',
//     size : 'medium',
//     block : false,
//     outline : false,
//     rectangle : false,
//     pill : false,
//     shadow : false
// }


export default Button;