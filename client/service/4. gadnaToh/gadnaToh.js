Template.gadnaToh.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('gadnaToh');
    })
});

Template.gadnaToh.helpers({
    gadnaTohs: function() {
        return service.find();
    }
});