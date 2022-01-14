const { getDream } = require('./getDream')
const { createDream } = require('./createDream')
const { updateDream } = require('./updateDream')
const { deleteDream } = require('./deleteDream')
const { getDreams } = require('./getDreams')
const { updateIsShared } = require('./updateIsShared')
module.exports = {
  getDream,
  getDreams,
  createDream,
  updateDream,
  deleteDream,
  updateIsShared
}
