Template.engiin.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('engiin');
    })
});

Template.engiin.helpers({
    engiins: function() {
        return homePlans.find();
    }
});