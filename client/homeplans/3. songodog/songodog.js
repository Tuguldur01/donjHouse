Template.songodog.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('songodog');
    })
});

Template.songodog.helpers({
    classics: function() {
        return homePlans.find();
    }
});