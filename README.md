# React Themed UI Components


## Theme
### Colors
There are 8 colors (primary, secondary, success, danger, info, warning, brand, accent) which are ready to use with any pre-defined theme.

Every color has an inverted version with key "invert". i.e primary-inverted for primary. That means any primary color background component may have primary-invert text color. 

#### Override Color
To override any theme color use rtui theme function. Please override inverted version of the color if needed.
```javascript
rtui.theme({
  colors : {
    primary : '#DDDDDD'
  }
})
```

### Custom Color Names
You can also add new color names to your theme. It's possible with rtui.theme function.
If you have your own color, you should define inverted version of your color.
```javascript
rtui.theme({
  colors : {
    myFancyColor : '#DDDDDD',
    myFancyColorInvert : '#FFFFFF'
  }
})
```
Camel case field names will be translated to 'my-fancy-color' and 'my-fancy-color-invert' automatically.


## Components
React themed ui components...
### Button
You can use buttons with different colors, size and styles. Default color is primary with standard style. Any color name is acceptable with "color" attribute.

```jsx
<Button color="success">Hello</Button>
```
<img src="https://image.ibb.co/nDx8WH/Screen_Shot_2018_02_05_at_00_29_20.png" height="70px"/>
 
 Define style with these attributes

| Attribute | type | Description |
| ------ | ------ | ------ | 
| shadow | bool | Drop shadow |
| outline | bool | Outline button style |
| rectangle | bool | No border radius |
| pill | bool | More border radius style |
| block | bool | 100% width|

### Alerts
You can use alerts with different colors and styles. Default color is primary with standard style. Any color name is acceptable with "color" attribute.

```jsx
<Alert color="warning">Hello! This is alert message box.</Alert>
```
<img src="https://image.ibb.co/hRWzQc/Screen_Shot_2018_02_05_at_20_18_32.png"/>
 
 Define style with these attributes

| Attribute | type | Description |
| ------ | ------ | ------ | 
| shadow | bool | Drop shadow |
| outline | bool | Outline button style |
| rectangle | bool | No border radius |