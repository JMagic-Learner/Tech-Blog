const { User, blogposts } = require('../models');

const sequelize = require('../config/connection');
const seedBlog = require('./blogpost');
const seedUser = require('./userData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----SYNCING DATABASE ------\n');

  await seedBlog();
  await seedUser();

  console.log('\n------APPLICATIONS HAVE BEEN SEEDED------\n');
  console.log('\n------Exiting seeding---------\n');
  process.exit(0);
};

seedDatabase();