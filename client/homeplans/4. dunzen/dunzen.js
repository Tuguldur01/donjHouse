Template.dunzen.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('dunzen');
    })
});

Template.dunzen.helpers({
    dunzens: function() {
        return homePlans.find();
    }
});