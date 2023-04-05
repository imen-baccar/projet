const mongoose=require("mongoose");
const schema=mongoose.Schema
const produitschema=new schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
    },
    image:{
        type:String,
        default:"https://img.freepik.com/photos-premium/maison-confortable-moderne-style-moderne-garage-vendre-louer-jardin-pelouse_100800-22062.jpg"
    }
})
const product=mongoose.model('produit',produitschema)
module.exports=product