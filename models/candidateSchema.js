const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    party:{
        type:String,
        required:true

    },
    votes:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Users',
                required:true
            },
            voetdAt:{
                type:Date,
                default:Date.now()
            }
        }
    ],
    voteCount:{
        type:Number,
        default:0
    }
});

const candidate = mongoose.model("Candidates", candidateSchema);

module.exports = candidate;