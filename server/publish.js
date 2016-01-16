Meteor.publish('homePlans', function () {
    return homePlans.find({});
});

//Meteor.publish('posts', function () {
//    return posts.find({});
//});

Meteor.publish('elite', function(){
    return homePlans.find({ "category.categoryName": "Элит хаус"})
});

Meteor.publish('modern', function(){
    return homePlans.find({ "category.categoryName": "Модерн хаус"})
});

Meteor.publish('songodog', function(){
    return homePlans.find({ "category.categoryName": "Сонгодог хаус"})
});

Meteor.publish('dunzen', function(){
    return homePlans.find({ "category.categoryName": "Дүнзэн хаус"})
});

Meteor.publish('canada', function(){
    return homePlans.find({ "category.categoryName": "Канад хаус"})
});

Meteor.publish('engiin', function(){
    return homePlans.find({ "category.categoryName": "Энгийн хаус"})
});

Meteor.publish('service', function () {
    return service.find({});
});

Meteor.publish('suudrevch', function () {
    return service.find({ "category.categoryName": "suudrevch"});
});

Meteor.publish('pool', function () {
    return service.find({ "category.categoryName": "pool"});
});

Meteor.publish('modonDotorlogoo', function () {
    return service.find({ "category.categoryName": "modonDot"});
});

Meteor.publish('gadnaToh', function () {
    return service.find({ "category.categoryName": "gadnaTohijilt"});
});

Meteor.publish('guniiHudag', function () {
    return service.find({ "category.categoryName": "guniiHudag"});
});

Meteor.publish('modonTavilga', function () {
    return service.find({ "category.categoryName": "modonTavilga"});
});

Meteor.publish('bMaterial', function () {
    return service.find({ "category.categoryName": "bMaterial"});
});