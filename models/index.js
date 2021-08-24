const User = require('./User');
const blogposts = require('./blogposts');

User.hasMany(blogposts, {
    foriegnKey: 'blogpost_id'
});

blogposts.belongsTo(User, {
    foriegnKey:'blogpost_id'
})

module.exports = { User , blogposts};
