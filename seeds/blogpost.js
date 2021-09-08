const {blogposts} = require('../models');

const blogData = 
[
    {
        blog_id: 1,
        title: "JavaScript - Using Async functions",
        description: "Placeholder - Please Seed more data"
    },
    {
        blog_id: 2,
        title: "Graphic Cards - New Gen",
        description: "Placeholder - Please seed more data"
    },
    {
        blog_id: 3,
        title: "Graphic Cards - New Gen",
        description: "Placeholder - Please seed more data"
    },
    {
        blog_id: 4,
        title: "Graphic Cards - New Gen",
        description: "Placeholder - Please seed more data"
    }
];

const seedBlog = () => blogposts.bulkCreate(blogData);
module.exports = seedBlog;

