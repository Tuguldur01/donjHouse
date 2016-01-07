Meteor.publish('homePlans', function () {
    return homePlans.find({});
});

Meteor.publish('service', function () {
    return service.find({});
});

Meteor.publish('posts', function () {
    return posts.find({});
});

Meteor.publish('images', function(){
    return Images.find();
});