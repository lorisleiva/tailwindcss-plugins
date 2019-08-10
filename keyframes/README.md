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
