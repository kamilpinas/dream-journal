const { validateCreateDream } = require('./validateCreateDream')
const { validateUpdateDream } = require('./validateUpdateDream')
const { validateDeleteDream } = require('./validateDeleteDream')
const { validateIsShared } = require('./validateIsShared')
const { validateGetDreams } = require('./validateGetDreams')
module.exports = {
  validateCreateDream,
  validateUpdateDream,
  validateDeleteDream,
  validateIsShared,
  validateGetDreams
}
