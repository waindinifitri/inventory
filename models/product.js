'use strict';
const sequelizePaginate = require('sequelize-paginate')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  };
  product.init({
    product_name: {
      type : DataTypes.STRING,
      validate :{
        notEmpty: {
          msg : "Please input the name of the Product.",
        }
      }
    },
    description: {
      type: DataTypes.INTEGER,
      validate : { 
        notEmpty: {
          msg : "Please input the description of the Product.",
        }
      }
    },
    price: {
      type : DataTypes.TEXT,
      validate : {
        isNumeric: true,
        notEmpty : {
          msg : "Please input the Product's price here."
        }
      }
    },
    stock: {
        type : DataTypes.TEXT,
        validate : {
          notEmpty : {
            msg : "Please input the stock of the product here."
          }
        }
    },
  }, {
    sequelize,
    modelName: 'product',
  });
  sequelizePaginate.paginate(product);
  return product;
};  