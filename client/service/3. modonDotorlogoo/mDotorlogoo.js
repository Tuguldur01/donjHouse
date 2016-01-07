Template.modonDotorlogoo.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('service');
    })
});

Template.modonDotorlogoo.helpers({
    mDotorlogoos: function() {
        return service.find({ "category.categoryName": "modonDot"});
    }
});