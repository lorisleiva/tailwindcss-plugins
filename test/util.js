const castArray = val => (Array.isArray(val) ? val : [val])
const get = (from, selector) => selector
    .replace(/\[([^\[\]]*)\]/g, '.$1.')
    .split('.')
    .filter(t => t !== '')
    .reduce((prev, cur) => prev && prev[cur], from)

const simulate = (plugin, config) => {
    let added = {
        utilities: {},
        components: {},
        variants: {},
    }

    const addVariant = (variant, newClasses) => {
        if (! added.variants.hasOwnProperty(variant)) {
            added.variants[variant] = []
        }

        newClasses.forEach(c => Object.keys(c).forEach(c => {
            if (! added.variants[variant].includes(c)) {
                added.variants[variant].push(c)
            }
        }))
    }

    plugin({
        config,
        e: name => name,
        theme: (selector, defaultValue) => get(config, `theme.${selector}`, defaultValue),
        variants: (selector, defaultValue) => get(config, `variants.${selector}`, defaultValue),
        addUtilities: (utilities, variants = []) => {
            utilities = castArray(utilities)
            utilities.forEach(u => Object.assign(added.utilities, u))
            variants.forEach(v => addVariant(v, utilities))
        },
        addComponents: (components, variants = []) => {
            components = castArray(components)
            components.forEach(c => Object.assign(added.components, c))
            variants.forEach(v => addVariant(v, components))
        },
    })

    return added
}

module.exports = {
    simulate
}
