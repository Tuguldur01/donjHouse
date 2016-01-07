Template.gadnaToh.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('service');
    })
});

Template.gadnaToh.helpers({
    gadnaTohs: function() {
        return service.find({ "category.categoryName": "gadnaTohijilt"});
    }
});