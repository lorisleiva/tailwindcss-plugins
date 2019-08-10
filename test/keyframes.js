import test from 'ava'
import keyframesPlugin from '../keyframes'
import { simulate } from './util'

let simulateKeyframes = keyframes => simulate(keyframesPlugin, {
    theme: { keyframes },
})

test('it adds keyframes', t => {
    const added = simulateKeyframes({
        bounce: {
            '0%, 100%': { 'transform': 'translateY(0)' },
            '50%': { 'transform': 'translateY(-5px)' },
        },
    })

    t.deepEqual(added.utilities, {
        '@keyframes bounce': {
            '0%, 100%': { 'transform': 'translateY(0)' },
            '50%': { 'transform': 'translateY(-5px)' },
        },
    })
});
