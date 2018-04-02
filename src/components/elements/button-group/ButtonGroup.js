import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { css } from 'aphrodite';
import { Button } from '../../../';
import { colors, styles } from '../../../utils/theme';
import { userProps } from '../../../utils/helpers';

import './button-group.scss'

const ButtonGroup = props => {
    ButtonGroup.propTypes = {
        color: PropTypes.oneOf(Object.keys(colors)),
        size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge']),
        block: PropTypes.bool,
        outline: PropTypes.bool,
        rectangle: PropTypes.bool,
        pill: PropTypes.bool,
        shadow: PropTypes.bool,
        vertical : PropTypes.bool,
        children: function (props, propName, componentName) {
            const prop = props[propName];

            let error;
            React.Children.forEach(prop, child => {
                if (child.type !== Button) {
                    error = new Error(
                        '`' + componentName + '` only accepts children of type `Button`.'
                    );
                }
            })
            return error;
        }
    };

    const classNameList = [
        'rtui-button-group',
        props.shadow ? 'shadow' : '',
        props.rectangle ? 'rectangle' : '',
        props.vertical ? 'vertical' : 'horizontal'
    ]

    const children = props.children;
    if (!React.Children.toArray(children).every(x => x.type === Button))
        return <div>Button Group only accepts children of type "Button".</div>

    const childrenWithProps = React.Children.map(children, child =>{
       return React.cloneElement(child, {
            color: child.props.color || props.color,
            size: child.props.size || props.size,
            block: child.props.block || props.block,
            outline: child.props.outline || props.outline,
            rectangle: child.props.rectangle || props.rectangle,
            pill: child.props.pill || props.pill,
            className : child.props.className || props.className
        })
    });
        

    return (
        <div className={classnames(...classNameList)}>
            {childrenWithProps}
        </div>
    )
}

ButtonGroup.defaultProps = {
    color: 'primary',
    size: 'medium',
    block: false,
    outline: false,
    rectangle: false,
    pill: false,
    shadow: false
}


export default ButtonGroup;


// jwt.verify(req.cookies.tkn, cert, function (err, decoded) {
//     if (err)
//         res.sendFile(path.join(__dirname, 'yoneticiLogin.html'));

//     if (!decoded.yoneticiMi) {
//         res.sendFile(path.join(__dirname, 'yoneticiLogin.html'));
//     }
//     else {
//         next();
//     }
// });


