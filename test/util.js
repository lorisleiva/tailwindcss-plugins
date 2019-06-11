const castArray = val => (Array.isArray(val) ? val : [val]);
const get = (from, selector) => selector
    .replace(/\[([^\[\]]*)\]/g, '.$1.')
    .split('.')
    .filter(t => t !== '')
    .reduce((prev, cur) => prev && prev[cur], from)

const simulate = (plugin, config) => {
    let added = {
        utilities: {},
        components: {},
    }

    plugin({
        config,
        e: name => name,
        theme: (selector, defaultValue) => get(config, `theme.${selector}`, defaultValue),
        variants: (selector, defaultValue) => get(config, `variants.${selector}`, defaultValue),
        addUtilities: utilities => castArray(utilities).forEach(u => Object.assign(added.utilities, u)),
        addComponents: components => castArray(components).forEach(c => Object.assign(added.components, c)),
    })

    return added
}

module.exports = {
    simulate
}
