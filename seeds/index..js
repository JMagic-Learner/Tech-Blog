
const { User , blogposts } = require('../models');
const sequelize = require('../config/connection');
const userData = require('./userData.js');
const seedBlogPosts = require('./blogpost.js');


const seedDatabase = async () => {
  console.log("SeedDatabase has been called");
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await seedBlogPosts();

  console.log(userData);
  process.exit(0);
};


module.exports = seedDatabase();