const map = require('lodash/map')

module.exports = function({ gradients, types = {}, variants }) {
    return function({ addUtilities, e }) {
        const utilities = map(gradients, ([angle, ...colors], name) => ({
            [`.bg-${e(name)}`]: {
                backgroundImage: `${(types.hasOwnProperty(name) ? types[name] : 'linear')}-gradient(${angle}, ${colors.join(', ')})`
            }
        }))

        addUtilities(utilities, variants)
    }
}
