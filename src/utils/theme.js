import { StyleSheet } from 'aphrodite';
import { fromCamelCase } from './helpers';
import themes from '../themes';

const defaultOptions = {
    theme: "default",
    colors: {}
}

let colors = {};
let styles = {};

const init = (options = defaultOptions) => {
    
    let themeSource = themes[`${options.theme || 'default'}Theme`] || themes['defaultTheme'];

    if(options.colors){
        Object.keys(options.colors).forEach(key => {
            const keyName = fromCamelCase(key);
            const value = options.colors[key];
            delete options.colors[key];
            options.colors[keyName] = value;
        })
    }

    initColors(themeSource, options);
    initStyles();
};

const initColors = (themeSource, options) => colors = Object.assign({}, themeSource.colors, options.colors || defaultOptions.colors);
const initStyles = () => {

    styles = StyleSheet.create(
        Object.keys(colors).reduce((acc, key) => {

            if (!key.includes('Invert')) {
                acc[`${key}-background`] = {
                    backgroundColor: colors[key],
                    color: colors[`${key}-invert`]
                };

                acc[`${key}-background-hover`] = {
                    backgroundColor: colors[key],
                    color: colors[`${key}-invert`],
                    ':hover': {
                        backgroundColor: changeColor(colors[key], -20)
                    }
                };

                acc[`${key}-border`] = {
                    borderColor: colors[key],
                    color: colors[key]
                };

                acc[`${key}-border-hover`] = {
                    borderColor: colors[key],
                    color: colors[key],
                    ':hover': {
                        backgroundColor: colors[key],
                        color: colors[`${key}-invert`]
                    }
                };

                acc[`${key}`] = {
                    backgroundColor: colors[key]
                };
            }

            return acc;
        }, {})
    )
};

const changeColor = (color, percent) => {

    if(color === undefined || !color.includes('#') || (color.length !== 7 && color.length !== 4)) return '#000000';
 
    if(color.length === 4)
        color += color.slice(1, 4);
        
    var red = parseInt(color.substring(1, 3), 16);
    var green = parseInt(color.substring(3, 5), 16);
    var blue = parseInt(color.substring(5, 7), 16);

    red = parseInt(red * (100 + percent) / 100);
    green = parseInt(green * (100 + percent) / 100);
    blue = parseInt(blue * (100 + percent) / 100);

    red = (red < 255) ? red : 255;
    green = (green < 255) ? green : 255;
    blue = (blue < 255) ? blue : 255;

    var sRed = ((red.toString(16).length == 1) ? "0" + red.toString(16) : red.toString(16));
    var sGreen = ((green.toString(16).length == 1) ? "0" + green.toString(16) : green.toString(16));
    var sBlue = ((blue.toString(16).length == 1) ? "0" + blue.toString(16) : blue.toString(16));

    return `#${sRed}${sGreen}${sBlue}`
};



export {
    themes,
    colors,
    styles,
    changeColor as _changeColor
}
export default init