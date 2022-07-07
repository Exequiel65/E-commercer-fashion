let Product = require('../database/models/product')
let httpStatus = require('../helpers/httpStatus')
let sorted = require('../helpers/sort')

class ProductController{
    static async all(req, res){
        let products
        try {
            products = await Product.find({})
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            })
        }
        res.status(httpStatus.OK).json({
            data: products
        })

    }

    static async created(req, res){
        let {name, description, price, images, categorie, type, discount, color, size, stock, rating} = req.body

        let product = new Product({
            name,
            description,
            price,
            images : images ? images : "default_image.png",
            categorie,
            type,
            discount,
            salesCount : 0,
            rating : rating ? rating : 0,
            color : [color],
            size : [size],
            stock

        })

        try {
            await product.save()
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            })
        }

        res.status(httpStatus.CREATED).json({
            msg: 'product succesfelly created',
            data: product
        })
    }

    static async featured(req, res){
        let newArrival
        let featuredProducts
        let bestSellers
        try {
            
            newArrival = await Product.find({}).sort({createdAt : -1}).limit(5)

        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            })
        }

        

        featuredProducts = sorted.sortFeatured(newArrival, 'ASC')
        bestSellers = sorted.sortBestSellers(newArrival, 'ASC')


        res.status(httpStatus.OK).json({
            data: {
                newArrival,
                bestSellers,
                featuredProducts,
            }
        })
    }
}

module.exports = ProductController