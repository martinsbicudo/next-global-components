const conditions = require('./conditions')
  , { hasChildrens, hasRoot } = require('./functions')
  , path = require('path')
  , obj = {
    provides: {},
    alias: {},
    eslint: {}
  }

const preparing = ({
	components,
	dirname
}) => {
	const names = [ ...new Set(
		Object.keys(components)
	)]

	return names.reduce((obj, name) => {
    const component = components[name]

		// ACTION IF NEED ADD ROOT COMPONENT
    hasRoot(component)
			? component[1][name] = component[0]
			: null

		// TREATMENT/GETTING COMPONENTS (PATH, LINT AND NAME)
    const treatment = hasChildrens(component)
			? preparing({
				components: component[1],
				dirname: path.resolve(dirname, component[0])
			})
			: conditions({
				obj,
				components,
				name,
				dirname
			})

		return {
			...obj,
			...treatment
		}
  }, obj)
}

module.exports = preparing
