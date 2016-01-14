Template.modern.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('modern');
    })
});

Template.modern.helpers({
    moderns: function() {
        return homePlans.find();
    }
});