
const { blogposts } = require('../models/');

const blogpostsData = 
[
    {
        blog_id: 1,
        title: "JavaScript - Using Async functions",
        description: "Placeholder - Please Seed more data"
    },
    {
        blog_id: 2,
        title: "Graphic Cards - New Gen",
        password: "Placeholder - Please seed more data"
    },
];

const seedBlogPosts = () => blogposts.bulkCreate(blogpostsdata);

module.exports = seedBlogPosts;