Template.suudrevch.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('service');
    })
});

Template.suudrevch.helpers({
    suudrevchs: function() {
        return service.find({ "category.categoryName": "suudrevch"});
    }
});