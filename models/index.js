const User = require('./User');
const blogposts = require('./blogposts');

User.hasMany(blogposts, {
    foriegnKey: 'blog_id'
});

blogposts.belongsTo(User, {
    foriegnKey:'blog_id'
})

module.exports = { User , blogposts};
