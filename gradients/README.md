# :rainbow: Gradients

Define linear gradient backgrounds.

<img width="314" alt="gradients" src="https://user-images.githubusercontent.com/3642397/39958708-e8295e76-5606-11e8-95bf-8b05846ba596.png">

## Installation

```bash
npm i tailwindcss-plugins -D
```

## Usage

```js
plugins: [
    require('tailwindcss-plugins/gradients')({
        gradients: {
            'topaz':      ['30deg', colors['orange'], colors['pink-light']],
            'topaz-dark': ['30deg', colors['orange-dark'], colors['pink']],
            'emerald':    ['to right', colors['green-light'], colors['teal']],
            'fireopal':   ['to right', '#40E0D0', '#FF8C00', '#FF0080'],
            'relay':      ['to top left', '#3A1C71', '#D76D77', '#FFAF7B'],
        },
        variants: ['responsive', 'hover']
    }),

    // ...
],
```

### Gradient type
The plugin accepts a second optional object that allows you to specify the gradient type. If omitted all gradients will be `linear`. The example below shows the plugin code to make the `relay` gradient `radial`.

```js
plugins: [
    require('tailwindcss-plugins/gradients')({
        gradients: {
            'topaz':      ['30deg', colors['orange'], colors['pink-light']],
            'topaz-dark': ['30deg', colors['orange-dark'], colors['pink']],
            'emerald':    ['to right', colors['green-light'], colors['teal']],
            'fireopal':   ['to right', '#40E0D0', '#FF8C00', '#FF0080'],
            'relay':      ['circle', '#3A1C71', '#D76D77', '#FFAF7B'],
        },
        types: {
          'relay': 'radial'
        }
        variants: ['responsive', 'hover']
    }),

    // ...
],
```

- **class names:** `bg-` followed by the gradient key. E.g. `bg-topaz`.
- **color definitions:** `Array` such that:
    - The first item defines the angle of the gradient.
    - The other items define the (unlimited) colors of the gradient.
