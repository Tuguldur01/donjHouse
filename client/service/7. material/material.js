Template.material.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('bMaterial');
    })
});

Template.material.helpers({
    materials: function() {
        return service.find();
    }
});