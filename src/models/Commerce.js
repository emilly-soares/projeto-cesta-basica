const { Schema, model } = require("mongoose");

const CommerceSchema = new Schema(
   {
      name: {
         type: String,
         required: true
      },
      street_name: {
         type: String,
         required: true
      },
      street_number: {
         type: String,
         required: true
      },
      neighborhood: {
         type: String,
         required: true
      },
      city: {
         type: String,
         required: true
      },
      state: {
         type: String,
         required: true
      }
   },
   {
      timestamps: true //Data de criação e Alteração
   }

);
module.exports = model("Commerce", CommerceSchema);