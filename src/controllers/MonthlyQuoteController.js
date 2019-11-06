const MonthlyQuoteController = require('../models/MonthlyQuote');
module.exports = {
   async store(req, res) {
      const monthlyQuoteController = await MonthlyQuoteController.create(req.body)
      return res.json(monthlyQuoteController)
   },
   async index(req, res) {
      const monthlyQuoteController = await MonthlyQuoteController.find({});
      return res.json(monthlyQuoteController)
   },
   async update(req, res) {
      const monthlyQuoteController = await MonthlyQuoteController.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new: true }
      )
      return res.json(monthlyQuoteController)
   },
   async destroy(req, res) {
      await MonthlyQuoteController.deleteOne({ _id: req.params.id })
      return res.json({
         message: "Excluído com sucesso"
      })
   }
}