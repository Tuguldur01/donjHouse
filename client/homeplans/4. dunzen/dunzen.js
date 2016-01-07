Template.dunzen.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('homePlans');
    })
});

Template.dunzen.helpers({
    dunzens: function() {
        return homePlans.find({ "category.categoryName": "Дүнзэн хаус"});
    }
});