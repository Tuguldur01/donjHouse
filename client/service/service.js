Template.serviceSingle.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('service');
    })
});