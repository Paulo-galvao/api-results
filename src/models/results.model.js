import mongoose from "mongoose";

const Schema = mongoose.Schema;

const resultSchema = new Schema({
    home: {
        type: String,
        required: true
    },
    away: {
        type: String,
        required: true
    },
    stadium: {
        type: String,
        required: true
    },
    homeGoals: {
        type: Number,
        required: true
    },
    awayGoals: {
        type: Number,
        required: true
    },
    tournament: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    hour: {
        type: "String",
        required: true
    },
    status: {
        type: String,
        enum: ["EM BREVE", "AO VIVO", "ENCERRADO"],
        required: true
    }
});

const Result = mongoose.model("Result", resultSchema);

export default Result;