const mongoose=require('mongoose');
const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    isDrink:{
        type:Boolean,
        required:true,
        default:false,
    },
    ingredients:{
        type:[String],
        required:true,
        default:[]
    },
    taste:{
        type:String,
        enum:['Spicy','Sweet','Sour'],
        required:true,
    },
    total_saled:{
        type:Number,
        required:true,
        default:0,
    }
});

const menuItem=mongoose.model('menuItem',menuItemSchema);
module.exports=menuItem;