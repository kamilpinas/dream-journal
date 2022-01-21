const { validateCreateSharedDream } = require('./validateCreateSharedDream')
const { validateDeleteSharedDream } = require('./validateDeleteSharedDream')
const { validateUpdateVoteSharedDream } = require('./validateVotesChange')
const {
  validateGetDreamWithCategory
} = require('./validateGetDreamWithCategory')
module.exports = {
  validateCreateSharedDream,
  validateDeleteSharedDream,
  validateUpdateVoteSharedDream,
  validateGetDreamWithCategory
}
