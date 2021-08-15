
const { User } = require('../models');
const userData = require('./userData');


const seedDatabase = async () => {
  console.log("SeedDatabase has been called");
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  console.log(userData);
  process.exit(0);
};

module.exports = seedDatabase();