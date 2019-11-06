const Commerce = require('../models/Commerce');
module.exports = {
   async store(req, res) {
      const commerce = await Commerce.create(req.body)
      return res.json(commerce)
   },
   async index(req, res) {
      const commerce = await Commerce.find({});
      return res.json(commerce)
   },
   async update(req, res) {
      const commerce = await Commerce.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new: true }
      )
      return res.json(commerce)
   },
   async destroy(req, res) {
      await Commerce.deleteOne({ _id: req.params.id })
      return res.json({
         message: "Excluído com sucesso"
      })
   }
}