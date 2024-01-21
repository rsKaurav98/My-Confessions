const mongoose = require("mongoose");

const All_ConfessionsModel = mongoose.Schema(
    {
        ConfessionName:{type:String,trim:true},
        users:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ],

    latestConfession:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Confessions"
    },

    },
       {
          timestamps:true,
      }
    );

    const All_Confessions = mongoose.model("Confession",All_ConfessionsModel);

    module.exports = All_Confessions;

