Template.modern.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('homePlans');
    })
});

Template.modern.helpers({
    moderns: function() {
        return homePlans.find({ "category.categoryName": "Модерн хаус"});
    }
});