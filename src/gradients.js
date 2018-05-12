const map = require('lodash/map')

module.exports = function({ gradients, variants }) {
    return function({ addUtilities, e }) {
        const utilities = map(gradients, ([angle, ...colors], name) => ({
            [`.bg-${e(name)}`]: {
                backgroundImage: `linear-gradient(${angle}, ${colors.join(', ')})`
            }
        }))

        addUtilities(utilities, variants)
    }
}