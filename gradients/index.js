const map = require('lodash/map')
const isObject = require('lodash/isObject')

module.exports = function({ gradients, variants }) {
    return function({ addUtilities, e }) {
      const utilities = map(gradients, (gradient, name) => ({
        [`.bg-${e(name)}`]: {
          backgroundImage: `${(isObject(gradient) && gradient.hasOwnProperty('type') ? gradient['type'] : 'linear')}-gradient(${isObject(gradient) && gradient.hasOwnProperty('colors') ? gradient.colors.join(', ') : gradient.join( ', ' ) })`
        }
      }))

      addUtilities(utilities, variants)
    }
}
