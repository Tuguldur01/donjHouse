Template.material.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('service');
    })
});

Template.material.helpers({
    materials: function() {
        return service.find({ "category.categoryName": "bMaterial"});
    }
});