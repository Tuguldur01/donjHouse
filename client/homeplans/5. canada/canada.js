Template.canada.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('canada');
    })
});

Template.canada.helpers({
    canadas: function() {
        return homePlans.find();
    }
});