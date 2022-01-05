const { getSharedDreams } = require('./getSharedDreams')
const { getSharedDream } = require('./getSharedDream')
const { createSharedDream } = require('./createSharedDream')
const { deleteSharedDream } = require('./deleteSharedDream')
const { incrementVotes } = require('./incrementVotes')
const { decrementVotes } = require('./decrementVotes')
const { getRandomSharedDream } = require('./getRandomSharedDream')
module.exports = {
  getSharedDreams,
  getSharedDream,
  createSharedDream,
  deleteSharedDream,
  getRandomSharedDream,
  incrementVotes,
  decrementVotes
}
