import React from 'react';
import { Alert } from '../../';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { colors, themes } from '../../utils/theme';
import { formatName } from '../../utils/helpers';
import rtui from '../../';

const stories = storiesOf('Alerts', module);
stories.addDecorator(withKnobs);


class AlertView extends React.Component {

    constructor() {
        super();
        this.state = {
            theme: 'default',
            usageText: 'Click an alert to see usage'
        }
    }

    onThemeChanged(e) {
        this.setState({
            theme: e.target.value
        })
    }

    onClicked(color, props) {
        let html = "<Alert";

        html = color !== "primary" ? html + ` color="${color}"` : html;

        Object.keys(props).forEach(key => {
            html += ' ' + key;
        })

        html += `>${text("Label", "Hello")}</Alert>`;

        this.setState({
            usageText: html
        })
    }

    render() {
        rtui.theme({
            theme: this.state.theme
        });
        const props = this.props;

        return (
            <div>
                <div className="usage">
                    <h2>Alerts</h2>
                    <label>Themes</label> : <select selected={this.state.theme} onChange={this.onThemeChanged.bind(this)}>
                        {Object.keys(themes).map(theme => {
                            return (<option key={theme} value={theme.replace('Theme', '')}>{formatName(theme.replace('Theme', ''))}</option>)
                        })}
                    </select>
                </div>
                {
                    Object.keys(colors).filter(color => !color.includes('invert')).map(color => {
                        return (
                            <div key={color}>
                                <Alert {...props} color={color} onClick={this.onClicked.bind(this, color, props)}>{text('Label', 'Hello! This is alert message box.')}</Alert>
                            </div>
                        )
                    })
                }
                <div className="usage">
                    <h2>Usage</h2>
                    <code>
                        {this.state.usageText}
                    </code>
                </div>
            </div>
        )
    }
}

stories
    .add('Standard Alert', () => <AlertView></AlertView>)
    .add('Alert with Shadow', () => <AlertView shadow></AlertView>)
    .add('Rectangle Alert', () => <AlertView rectangle></AlertView>)
    .add('Rectangle Alert with Shadow', () => <AlertView rectangle shadow></AlertView>)
    .add('Outline Alert', () => <AlertView outline></AlertView>)
    .add('Outline Alert with Shadow', () => <AlertView outline shadow ></AlertView>)
    .add('Outline Rectangle Alert', () => <AlertView outline rectangle></AlertView>)
    .add('Outline Rectangle Alert With Shadow', () => <AlertView outline rectangle shadow></AlertView>);