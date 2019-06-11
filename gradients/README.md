# :rainbow: Gradients

Define linear gradient backgrounds.

<img width="314" alt="gradients" src="https://user-images.githubusercontent.com/3642397/39958708-e8295e76-5606-11e8-95bf-8b05846ba596.png">

## Installation

```bash
npm i tailwindcss-plugins -D
```

## Usage
The gradients object is `key`/`value` based where the `key` will form part of the class name. The `value` can be either and `array` (to form a linear gradient) or an `object` with two keys `type` and `colors`.

```js
theme: {
    gradients: theme => ({
        // Array definition (defaults to linear gradients).
        'topaz':      ['30deg', theme('colors.orange.500'), theme('colors.pink.300')],
        'topaz-dark': ['30deg', theme('colors.orange.700'), theme('colors.pink.500')],
        'emerald':    ['to right', theme('colors.green.300'), theme('colors.teal.500')],
        'fireopal':   ['to right', '#40E0D0', '#FF8C00', '#FF0080'],
        'relay':      ['to top left', '#3A1C71', '#D76D77', '#FFAF7B'],

        // Object definition.
        'mono-circle': {
            type: 'radial',
            colors: ['circle', '#CCC', '#000']
        },
    }),
},
variants: {
    gradients: ['responsive', 'hover'],
},
plugins: [
    require('tailwindcss-plugins/gradients'),
],
```

- **class names:** `bg-` followed by the gradient key. E.g. `bg-topaz`.
- **type definitions:** Can be: `linear` (default), `radial`, `repeating-linear`, `repeating-radial`.
- **color definitions:** `Array` such that:
    - The first item defines the angle of the gradient. (optional)
    - The other items define the (unlimited) colors of the gradient.
