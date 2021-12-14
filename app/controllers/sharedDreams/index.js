const { getSharedDreams } = require('./getSharedDreams')
const { getSharedDream } = require('./getSharedDream')
const { createSharedDream } = require('./createSharedDream')
const { deleteSharedDream } = require('./deleteSharedDream')
module.exports = {
  getSharedDreams,
  getSharedDream,
  createSharedDream,
  deleteSharedDream
}
