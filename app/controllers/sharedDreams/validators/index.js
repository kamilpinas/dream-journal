const { validateCreateSharedDream } = require('./validateCreateSharedDream')
const { validateDeleteSharedDream } = require('./validateDeleteSharedDream')
const { validateUpdateVoteSharedDream } = require('./validateVotesChange')
module.exports = {
  validateCreateSharedDream,
  validateDeleteSharedDream,
  validateUpdateVoteSharedDream
}
