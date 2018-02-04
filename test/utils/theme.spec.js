import chai from 'chai';
const expect = chai.expect;
import Theme, { themes, colors, styles, _changeColor } from '../../src/utils/theme';

describe('Utils / Theme', () => {
    describe('Initialize', () => {
        it('should set default color for blank options parameters', () => {
            Theme();
            var defaultThemeColors = themes.defaultTheme.colors;

            Object.keys(defaultThemeColors).forEach(key => {
                expect(colors[key]).equal(defaultThemeColors[key]);
            })

        });

        it('should set default color for not existing theme name', () => {
            Theme({ theme: 'fake-theme' });

            var defaultThemeColors = themes.defaultTheme.colors;

            Object.keys(defaultThemeColors).forEach(key => {
                expect(colors[key]).equal(defaultThemeColors[key]);
            })

        });

        it('should assign new user colors for theme', () => {
            Theme({ colors : { primary : '#000000'} });

            var defaultThemeColors = themes.defaultTheme.colors;

            expect(colors.primary).equal('#000000');
            expect(colors.secondary).equal(defaultThemeColors.secondary);
        });

        it('should assing new color name for theme', () => {
            Theme({ colors : { "myColor" : '#FFFFFF', "myColorInvert" : '#000000'}});

            expect(colors['my-color']).to.not.undefined;
            expect(colors['my-color']).equal('#FFFFFF');

            expect(colors['my-color-invert']).to.not.undefined;
            expect(colors['my-color-invert']).equal('#000000');

        });

        it('should set styles', () => {
            Theme();
            expect(Object.keys(styles)).to.have.lengthOf.above(0);
        })
    });

    describe('Change color', () => {
        it('should darken given color', ()=>{
            const color = "#26477c";
            let newColor = _changeColor(color, -30);
            expect(newColor).equal('#1a3156')
        });

        it('should lighten given color', ()=>{
            const color = "#26477c";
            let newColor = _changeColor(color, 30);
            expect(newColor).equal('#315ca1')
        });

        it('should change color which has 3 chars', () => {
            const color = "#DDD";
            let newColor = _changeColor(color, -30);
            expect(newColor).equal('#9a9a9a')
        });

        it('should return black if color is invalid', () => {
            const color = "fake";
            let newColor = _changeColor(color, 10);
            expect(newColor).equal('#000000')
        })
    });
});