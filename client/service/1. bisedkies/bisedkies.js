Template.suudrevch.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('suudrevch');
    })
});

Template.suudrevch.helpers({
    suudrevchs: function() {
        return service.find();
    }
});