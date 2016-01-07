Template.service.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('pool');
    })
});

Template.service.helpers({
    serviceData: function() {
        return pool.find({});
    }
});