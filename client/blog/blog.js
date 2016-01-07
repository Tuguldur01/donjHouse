Template.blogTemplate.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('posts');
    })
});

Template.blogTemplate.helpers({
    posts: function() {
        return posts.find({});
    }
});