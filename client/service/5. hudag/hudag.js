Template.hudag.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('guniiHudag');
    })
});

Template.hudag.helpers({
    hudags: function() {
        return service.find();
    }
});