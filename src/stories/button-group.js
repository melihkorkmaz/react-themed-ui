import React from 'react';
import rtui, { ButtonGroup, Button, Alert } from '../';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { colors, themes } from '../utils/theme';
import { formatName } from '../utils/helpers';
import ThemeSelect from './components/ThemeSelector';

const stories = storiesOf('Button Group', module);

const sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge'];

rtui.theme();


class ButtonGroupView extends React.Component {

    constructor() {
        super();
        this.state = {
            theme: 'default',
            usageText: 'Click an button to see usage',
            styles : [
                { text : "Standard", value : {}},
                { text : "With Shadow", value : {shadow : true}},
                { text : "Rectangle", value: {rectangle : true }},
                { text : "Rectangle with Shadow", value: {rectangle : true, shadow : true}},
                { text : "Pill", value: {pill : true }},
                { text : "Pill with Shadow", value: {pill : true, shadow : true }},
                { text : "Outline", value: {outline : true }},
                { text : "Outline with Shadow", value: {outline : true, shadow : true }},
            ],
            selectedStyle : {}
        }
    }

    onThemeChanged(e) {
        this.setState({
            theme: e.target.value
        })
    }

    onClicked(color) {
        let html = "<ButtonGroup";

        html = this.props.vertical ? html + ' vertical' : html;
        html = color !== "primary" ? html + ` color="${color}"` : html;

        Object.keys(this.state.selectedStyle).forEach(key => {
            html += ' ' + key;
        })

        html += `>\n\t<Button>Hello</Button>\n\t<Button>Hello</Button>\n\t<Button>Hello</Button>\n</ButtonGroup>`;

        this.setState({
            usageText: html
        })
    }

    render() {
        rtui.theme({
            theme: this.state.theme
        });
        const props = this.props;

        const buttonTypes = {

        }

        return (
            <div style={{ display: "flex" }}>
                <div className="usage" style={{ flex: 1, paddingRight: "10px" }}>
                    <h2>Button Groups</h2>
                    <ThemeSelect theme={this.state.theme} onThemeChanged={this.onThemeChanged.bind(this)}></ThemeSelect>
                    <div>
                        <label>Style : </label>
                        <select selected={this.selectedStyle} onChange={(e) => { this.setState({ selectedStyle : JSON.parse(e.target.value), usageText: 'Click an button to see usage'})}}>
                            {this.state.styles.map((item, index) => {
                                return <option value={JSON.stringify(item.value)} key={index}>{item.text}</option>
                            })}
                        </select>
                    </div>
                    <div style={{ paddingTop: "10px" }}>
                        <table>
                            <tbody>
                                {Object.keys(colors)
                                    .filter(color => !color.includes('invert'))
                                    .map((color, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    {formatName(color)}
                                                </td>
                                                <td>
                                                    <ButtonGroup color={color} {...this.state.selectedStyle} {...props}>
                                                        <Button onClick={this.onClicked.bind(this, color)}>Button</Button>
                                                        <Button onClick={this.onClicked.bind(this, color)}>Button</Button>
                                                        <Button onClick={this.onClicked.bind(this, color)}>Button</Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        )
                                    })}

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="usage" style={{ flex: 1, paddingLeft: "10px" }}>
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
    .add('Horizontal Button Group', () => <ButtonGroupView></ButtonGroupView>)
    .add('Vertical Button Group', () => <ButtonGroupView vertical></ButtonGroupView>);