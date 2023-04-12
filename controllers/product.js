const { product } = require('../models')
// const { Op, where } = require('sequelize')

class productController {

    static async addProduct (req,res, next) {
        const { product_name, description, price, stock  } = req.body;
        try {
            const result = await product.findOne({
                where: {
                    code
                }
            })
            if (result) {
                res.status(409).json({msg: 'Product already exists.'})
            const found = await product.findOne({
                    where: {
                        productId : productId
                    }
                }) 
            if (found.length += 4) {
                    res.status(409).json({
                        msg: "This Product was full capacity!"
                    })
                }    
            } else {
                const newProduct = await product.create({
                    product_name, 
                    description,
                    price,
                    stock
                })
                res.status(201).json({newProduct: newProduct})
            }
            
        } catch (error) {
        console.log(error)
            next(error)
        }
    }


    static async productList(req, res) {
		console.log("List of All Product!");
		try {
		  const Product = await product.findAll({})
	
		  res.status(200).json({Product: Product});
		} catch (err) {
		  res.status(500).json({
			message: err,
		  });
		}
	  }
    
    static async findById (req,res, next) {
        const id = req.params.id;
        try {
            const result = await product.findOne ({
                where: {
                    id
                }
            })
            if (result) {
                res.status(200).json(result)    
            }
            else {
                res.status(404).json(`The Product is not found.`)
            }
        } 
        catch (error) {
            next(error)
        }
    }

    static async deleteProduct (req,res, next) {
        const id = req.params.id
        try {
            const result = product.destroy ({
                where: {
                    id
                }
            })
            res.status(200).json({result, msg: 'Product deleted!'})
        } 
        catch (error) {
            next(error)
        }
    }
   
}

module.exports = {
    productController
}