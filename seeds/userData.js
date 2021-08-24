
const {User} = require('../models');

const UserData = 
[
    {
        name: "Sal",
        email: "sal@hotmail.com",
        password: "password12345"
    },
    {
        name: "Vert",
        email: "vert@gmail.com",
        password: "canoptek"
    }
];

const seedUserData = () => User.bulkCreate(UserData);

module.exports = seedUserData;