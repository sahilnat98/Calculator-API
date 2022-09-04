const mongoose =require("mongoose");

const Api= new mongoose.Schema({
    num1:{
        type:Number
    },
    num2:{
        type:Number
    },sum:{
        type:String,
    },difference:{
        type:String,
    },multiply:{
        type:String,
    },divide:{
        type:String,
    }
});
const Calcu =mongoose.model("cal",Api);
module.exports=Calcu;