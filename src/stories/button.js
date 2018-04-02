import React from 'react';
import rtui, { Button } from '../';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { colors, themes } from '../utils/theme';
import { formatName } from '../utils/helpers';
import ThemeSelect from './components/ThemeSelector';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

const sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge'];

class ButtonsView extends React.Component {

    constructor(){
        super();
        this.state = {
            theme : 'default',
            usageText : 'Click a button to see usage'
        }
    }

    onThemeChanged(e){
        this.setState({
            theme: e.target.value
        })
    }

    onButtonClicked(size, color, props){
        let html = "<Button";

        html = size !== "medium" ? html + ` size="${size}"` : html;
        html = color !== "primary" ? html + ` color="${color}"` : html;   

        Object.keys(props).forEach(key => {
            html += ' ' + key;
        })
        
        html += `>${text("Label", "Hello")}</Button>`;

        this.setState({
            usageText : html
        })
    }

    render() {
        rtui.theme({
            theme : this.state.theme
        });
        const props = this.props;
        return (
            <div>
                <div className="usage">
                    <h2>Buttons</h2>
                    <ThemeSelect theme={this.state.theme} onThemeChanged={this.onThemeChanged.bind(this)}></ThemeSelect>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Color/Size</th>
                            {sizes.map(size => {
                                return <th key={size}>{formatName(size)}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(colors).filter(color => !color.includes('invert')).map(color => {
                                    return (<tr key={color}>
                                    <td>{formatName(color)}</td>
                                    {
                                        sizes.map(size => {
                                            return (
                                                <td key={size}>
                                                    <Button {...props} size={size} color={color} onClick={this.onButtonClicked.bind(this, size, color, props)}>{text('Label', 'Hello')}</Button>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
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
    .add('Standard Button', () => <ButtonsView></ButtonsView>)
    .add('Button with Shadow', () => <ButtonsView shadow></ButtonsView>)
    .add('Rectangle Button', () => <ButtonsView rectangle></ButtonsView>)
    .add('Rectangle Button with Shadow', () => <ButtonsView rectangle shadow></ButtonsView>)
    .add('Pill Button', () => <ButtonsView pill></ButtonsView>)
    .add('Pill Button with Shadow', () => <ButtonsView pill shadow></ButtonsView>)
    .add('Outline Button', () => <ButtonsView outline></ButtonsView>)
    .add('Outline Button with Shadow', () => <ButtonsView outline shadow ></ButtonsView>)
    .add('Outline Rectangle Button', () => <ButtonsView outline rectangle></ButtonsView>)
    .add('Outline Rectangle Button With Shadow', () => <ButtonsView outline rectangle shadow></ButtonsView>)
    .add('Outline Pill Button', () => <ButtonsView outline pill></ButtonsView>)
    .add('Outline Pill Button With Shadow', () => <ButtonsView outline pill shadow></ButtonsView>)
    .add('Button as Block', () => <ButtonsView block></ButtonsView>);