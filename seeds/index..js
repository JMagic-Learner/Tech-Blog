
const sequelize = require('../config/connection');
const { User , blogposts } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogpost.js');


const seedDatabase = async () => {
  console.log("SeedDatabase has been called");
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

process.exit(0);
};


module.exports = seedDatabase();