import Product from '../models/products'
import joi from 'joi'

const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    desc: joi.string(),
    status: joi.boolean()
})

export const getAll = async (req, res) => {
    try {
        const products = await Product.find()
        if (products.length === 0) {
           return res.status(404).json({ 
                message: "Product not found",
                
            })
        }
        return res.status(200).json({
            message: "Product found",
            products
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
        })
    }
}

export const get = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id)
        if (!products) {
           return res.status(404).json({ 
                message: "Product not found",
                
            })
        }
        return res.status(200).json({
            message: "Product found",
            products
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
        })
    }
}

export const create = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body)
        if (error) {
            res.json({
                message: error.details[0].message,
            })
        }
        const products = await Product.create(req.body)
        if (!products) {
           return res.status(404).json({ 
                message: "Product not created",
                
            })
        }
        return res.status(200).json({
            message: "Product created successfully",
            products
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
        })
    }
}

export const update = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body)
        if (error) {
            res.json({
                message: error.details[0].message,
            })
        }
        const products = await Product.findByIdAndUpdate(req.params.id, req.body)
        if (!products) {
           return res.status(404).json({ 
                message: "Product not updated",
                
            })
        }
        return res.status(200).json({
            message: "Product updated successfully",
            products: req.body
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
        })
    }
}

export const remove = async (req, res) => {
    try {
        const products = await Product.findByIdAndDelete()
        
        return res.status(200).json({
            message: "Product deleted successfully",
            
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
        })
    }
}