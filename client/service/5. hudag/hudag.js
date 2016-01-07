Template.hudag.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('service');
    })
});

Template.hudag.helpers({
    hudags: function() {
        return service.find({ "category.categoryName": "guniiHudag"});
    }
});