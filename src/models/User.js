const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
   {
      name: {
         type: String,
         required: true
      },
      email: {
         type: String,
         required: true,
         unique: true
      },
      password: {
         type: String,
         required: true
      },
      token: {
         type: String,
         required: true
      }
   },
   {
      timestamps: true //Data de criação e Alteração
   }
);

module.exports = model("User", UserSchema);