
const User = require('../models/User');
module.exports = { //criar  os modulos
   async store(req, res) {
      const user = await User.create(req.body)
      return res.json(user)
   },
   async index(req, res) {
      const user = await User.find({});
      return res.json(user)
   },
   async update(req, res) {
      const user = await User.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new: true }
      )
      return res.json(user)
   },
   async destroy(req, res) {
      await User.deleteOne({ _id: req.params.id })
      return res.json({
         message: "Excluído com sucesso"
      })
   }
}
