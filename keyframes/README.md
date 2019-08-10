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

<img src="https://user-images.githubusercontent.com/3642397/62825393-ae9afe00-bba2-11e9-8639-cfc6496b1dd6.gif" width="300">

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

<img src="https://user-images.githubusercontent.com/3642397/62825392-ae9afe00-bba2-11e9-9e55-f24eb372b198.gif" width="300">

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
