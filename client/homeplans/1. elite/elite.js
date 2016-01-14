Template.elite.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('elite');
    })
});

Template.elite.helpers({
    elites: function() {
        return homePlans.find();
    }
});