import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
    status: Boolean,
})

export default mongoose.model('Product', productSchema)