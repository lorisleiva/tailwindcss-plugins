# 🎞️ Keyframes

Define CSS keyframes

## Installation

```bash
npm i tailwindcss-plugins -D
```

## Usage
```js
theme: {
    keyframes: {
        bounce: {
            '0%, 100%': { 'transform': 'translateY(0)' },
            '50%': { 'transform': 'translateY(-5px)' },
        },
    },
},
plugins: [
    require('tailwindcss-plugins/keyframes'),
],
```

See the [animations](../animations) plugin to define animations using those keyframes.

## Available keyframes

### spin

![spin](https://user-images.githubusercontent.com/3642397/62825321-b017f680-bba1-11e9-8970-64996ca505a0.gif)

```js
theme: {
    animations: {
        spin: 'spin 4s linear infinite',
    },
},
plugins: [
    require('tailwindcss-plugins/animation'),
    require('tailwindcss-plugins/keyframes/spin'),
],
```

### shake

![shake](https://user-images.githubusercontent.com/3642397/62825320-b017f680-bba1-11e9-9753-1c278a8c7a9c.gif)

```js
theme: {
    animations: {
        shake: 'shake .5s',
    },
},
plugins: [
    require('tailwindcss-plugins/animation'),
    require('tailwindcss-plugins/keyframes/shake'),
],
```
