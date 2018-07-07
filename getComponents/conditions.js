const path = require('path')

module.exports = ({
	obj,
	components,
	name,
	dirname
}) => {
  const component = components[name]

  obj.provides[name] = [name, 'default']
  
  obj.alias[name] = dirname.endsWith(component)
    ? dirname
    : path.resolve(dirname, component)


  obj.eslint[name] = true

	return obj
}
