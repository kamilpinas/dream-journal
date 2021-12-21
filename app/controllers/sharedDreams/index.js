const { getSharedDreams } = require('./getSharedDreams')
const { getSharedDream } = require('./getSharedDream')
const { createSharedDream } = require('./createSharedDream')
const { deleteSharedDream } = require('./deleteSharedDream')
const { incrementVotes } = require('./updateVotes')
module.exports = {
  getSharedDreams,
  getSharedDream,
  createSharedDream,
  deleteSharedDream,
  incrementVotes
}
