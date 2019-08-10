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

![spin](https://user-images.githubusercontent.com/3642397/62825253-a5a92d00-bba0-11e9-94b7-8f284103e4ab.gif)

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

![shake](https://user-images.githubusercontent.com/3642397/62825252-a5a92d00-bba0-11e9-8666-7992e5ec4320.gif)

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
