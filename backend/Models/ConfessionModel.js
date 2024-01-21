const mongoose = require("mongoose");

const ConfessionModel = mongoose.Schema({
    sender : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    content:{
        type:String,trim:true
    },
    All_Confessions:{type:mongoose.Schema.Types.ObjectId,ref:"All_Confessions"}
},
{
  timestamps: true,
}
);

const Confession = mongoose.model("Confession",ConfessionModel);
module.exports = Confession;