import test from 'ava'
import gradientsPlugin from '../gradients'
import { simulate } from './util'

let simulateGradients = (gradients, variants = []) => simulate(gradientsPlugin, {
    theme: { gradients },
    variants: { gradients: variants },
})

test('it supports array definition and uses linear gradient by default', t => {
    const added = simulateGradients({
        topaz: ['to right', 'blue', 'red']
    })

    t.deepEqual(added.utilities, {
        '.bg-topaz': {
            backgroundImage: 'linear-gradient(to right, blue, red)'
        }
    })
});

test('it supports object definition', t => {
    const added = simulateGradients({
        topaz: {
            colors: ['to right', 'blue', 'red'],
            type: 'linear'
        }
    })

    t.deepEqual(added.utilities, {
        '.bg-topaz': {
            backgroundImage: 'linear-gradient(to right, blue, red)'
        }
    })
});

test('it uses unlimited colors', t => {
    const added = simulateGradients({
        unlimited: ['blue', 'red', 'pink', 'yellow', 'orange', 'black', 'purple', 'white']
    })

    t.deepEqual(added.utilities, {
        '.bg-unlimited': {
            backgroundImage: 'linear-gradient(blue, red, pink, yellow, orange, black, purple, white)'
        }
    })
});

test('it supports multiple gradients', t => {
    const added = simulateGradients({
        'topaz': ['to right', 'blue', 'red'],
        'topaz-dark': ['to right', 'darkblue', 'darkred'],
        'emerald': ['to bottom', 'green', 'lightgreen'],
        'fireopal': ['30deg', 'pink', 'orange', 'red'],
        'relay': ['to top left', '#3A1C71', '#D76D77', '#FFAF7B'],
    })

    t.deepEqual(added.utilities, {
        '.bg-topaz': { backgroundImage: 'linear-gradient(to right, blue, red)' },
        '.bg-topaz-dark': { backgroundImage: 'linear-gradient(to right, darkblue, darkred)' },
        '.bg-emerald': { backgroundImage: 'linear-gradient(to bottom, green, lightgreen)' },
        '.bg-fireopal': { backgroundImage: 'linear-gradient(30deg, pink, orange, red)' },
        '.bg-relay': { backgroundImage: 'linear-gradient(to top left, #3A1C71, #D76D77, #FFAF7B)' },
    })
});

test('it supports linear, radial, repeating-linear, repeating-radial gradients', t => {
    const added = simulateGradients({
        'topaz-linear': { colors: ['blue', 'red'], type: 'linear' },
        'topaz-radial': { colors: ['blue', 'red'], type: 'radial' },
        'topaz-repeating-linear': { colors: ['blue', 'red'], type: 'repeating-linear' },
        'topaz-repeating-radial': { colors: ['blue', 'red'], type: 'repeating-radial' },
    })

    t.deepEqual(added.utilities, {
        '.bg-topaz-linear': { backgroundImage: 'linear-gradient(blue, red)' },
        '.bg-topaz-radial': { backgroundImage: 'radial-gradient(blue, red)' },
        '.bg-topaz-repeating-linear': { backgroundImage: 'repeating-linear-gradient(blue, red)' },
        '.bg-topaz-repeating-radial': { backgroundImage: 'repeating-radial-gradient(blue, red)' },
    })
});

test('it supports variants', t => {
    const added = simulateGradients(
        { topaz: ['to right', 'blue', 'red'] },
        ['responsive', 'hover']
    )

    t.deepEqual(added.variants, {
        'responsive': ['.bg-topaz'],
        'hover': ['.bg-topaz'],
    })
});
