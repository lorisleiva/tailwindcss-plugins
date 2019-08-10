# :movie_camera: Animations

Define CSS animations

## Installation

```bash
npm i tailwindcss-plugins -D
```

## Usage
The animations object is `key`/`value` based where **the `key` is the class name generated**. This plugin assumes any keyframes used are available. See the [keyframes](../keyframes) plugin to use existing keyframes or create your own ones directly from your TailwindCSS config file.

```js
theme: {
    animations: {
        // Assumes keyframes are available.
        spin: 'spin 4s linear infinite',
        shake: 'shake .5s',
    },
},
plugins: [
    require('tailwindcss-plugins/animations'),
],
```

```html
<svg class="spin fill-current w-5 h-5"><!-- ... --></svg>
<div :class="{ shake: hasError }"><!-- ... --></div>
```

## Why not breaking down each animation property? (name, duration, delay, etc.)
My motivations for defining animations using the shorthand property (i.e. `spin` instead of `animation-spin animation-slow animation-infinite animation-linear`) is that every animation has unique needs and what may be "slow" for one animation may be way too fast for another. Animations are usually defined for particular needs in your UI (e.g. a spinning icon) so I think they can afford to loose the extra modularity of separating every animation property.
