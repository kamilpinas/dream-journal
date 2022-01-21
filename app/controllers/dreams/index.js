const { createDream } = require('./createDream')
const { updateDream } = require('./updateDream')
const { deleteDream } = require('./deleteDream')
const { getDreams } = require('./getDreams')
const { updateIsShared } = require('./updateIsShared')
module.exports = {
  getDreams,
  createDream,
  updateDream,
  deleteDream,
  updateIsShared
}
