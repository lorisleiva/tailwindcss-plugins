# :rainbow: Gradients

Define linear gradient backgrounds.

<img width="314" alt="gradients" src="https://user-images.githubusercontent.com/3642397/39958708-e8295e76-5606-11e8-95bf-8b05846ba596.png">

## Installation

```bash
npm i tailwindcss-plugins -D
```

## Usage
The gradients object is `key`/`value` based where the `key` will form part of the class name. The `value` can be either and `array` (to form a linear gradient) or an `object` with two keys `type` and `colors`.

The `type` key allows for changing the gradient type e.g. passing in `'radial'`. The `colors` key works in the same way as passing an `array` with generating the angle and colors of the gradient.

```js
plugins: [
    require('tailwindcss-plugins/gradients')({
        gradients: {
            // Linear Gradients
            'topaz':      ['30deg', colors['orange'], colors['pink-light']],
            'topaz-dark': ['30deg', colors['orange-dark'], colors['pink']],
            'emerald':    ['to right', colors['green-light'], colors['teal']],
            'fireopal':   ['to right', '#40E0D0', '#FF8C00', '#FF0080'],
            'relay':      ['to top left', '#3A1C71', '#D76D77', '#FFAF7B'],
            // Radial Gradient
            'mono-circle': {
              type: 'radial',
              colors: ['circle', '#CCC', '#000']
            },
        },
        variants: ['responsive', 'hover']
    }),

    // ...
],
```

- **class names:** `bg-` followed by the gradient key. E.g. `bg-topaz`.
- **color definitions:** `Array` such that:
    - The first item defines the angle of the gradient.
    - The other items define the (unlimited) colors of the gradient.
