const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Blogpost extends Model {}
Blogpost.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoincrement:true,
      },
      blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "User",
            key: 'id',
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'blogpost',
    }
  );
  
  module.exports = Blogpost;
  