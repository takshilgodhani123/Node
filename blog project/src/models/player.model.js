const mongoose = require("mongoose");
const config=require("../config/config")

const playerSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phone_no: {
      type: Number,
    },
    player_img:{
      type: String,
    },
    specifiaction: {
      type: String,
      trim: true,
    },
    coach: {
      type: mongoose.Types.ObjectId,
      ref: "coach",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.player_img) {
          data.player_img = `${config.base_url}player_img/${data.player_img}`;
        }
      },
    },
  }
);

const Player = mongoose.model("player", playerSchema);

module.exports = Player;

