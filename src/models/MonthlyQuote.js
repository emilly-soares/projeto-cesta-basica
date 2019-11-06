const { Schema, model } = require("mongoose");

const MonthlyQuoteSchema = new Schema(
   {
      month: {
         type: String,
         required: true
      },
      commerce_id: {
         type: String,
         required: true
      },
      user_id: {
         type: String,
         required: true
      }
   },
   {
      timestamps: true //Data de criação e Alteração
   }
)