const map = require('lodash/map')
const isPlainObject = require('lodash/isPlainObject')

module.exports = function ({ gradients, variants }) {
    return function ({ addUtilities, e }) {
        const utilities = map(gradients, (gradient, name) => {

            const type = isPlainObject(gradient) && gradient.hasOwnProperty('type') ? gradient.type : 'linear'
            const colors = isPlainObject(gradient) ? (gradient.colors || []) : gradient

            return {
                [`.bg-${e(name)}`]: {
                    backgroundImage: `${type}-gradient(${colors.join(', ')})`
                }
            }
        })

        addUtilities(utilities, variants)
    }
}
