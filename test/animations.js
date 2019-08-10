import test from 'ava'
import animationsPlugin from '../animations'
import { simulate } from './util'

let simulateAnimations = animations => simulate(animationsPlugin, {
    theme: { animations },
})

test('it adds animations', t => {
    const added = simulateAnimations({
        spin: 'spin 4s linear infinite',
        shake: 'shake .5s',
    })

    t.deepEqual(added.utilities, {
        '.spin': {
            animation: 'spin 4s linear infinite'
        },
        '.shake': {
            animation: 'shake .5s'
        }
    })
});
