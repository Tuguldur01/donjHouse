Template.tavilga.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('modonTavilga');
    })
});

Template.tavilga.helpers({
    tavilgas: function() {
        return service.find();
    }
});