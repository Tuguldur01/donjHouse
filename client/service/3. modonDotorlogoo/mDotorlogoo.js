Template.modonDotorlogoo.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('modonDotorlogoo');
    })
});

Template.modonDotorlogoo.helpers({
    mDotorlogoos: function() {
        return service.find();
    }
});