const path = require('path')
  , checkType = (value, type) =>
      Object.prototype.toString.call(value).toLowerCase() === `[object ${type}]`

module.exports = {
  // CHECK TYPE
  checkType,

  // CHECK HAS CHILDRENS FOR GET
  hasChildrens: component =>
    checkType(component, 'array') &&
    checkType(component[1], 'object'),

  // CHECK IF IS PASSING TRUE FOR GET ROOT COMPONENT
  hasRoot: component =>
    checkType(component, 'array') &&
    component.length === 3 &&
    component[2] === true,

  // GETTING AND CHECKING IF EXIST FILE COMPONENTS
  getFileComponents: file => {
    try {
      return require(
        path.resolve(file)
      )
    } catch (err) {
      return {}
    }
  }
}
