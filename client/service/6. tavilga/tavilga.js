Template.tavilga.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('service');
    })
});

Template.tavilga.helpers({
    tavilgas: function() {
        return service.find({ "category.categoryName": "modonTavilga"});
    }
});