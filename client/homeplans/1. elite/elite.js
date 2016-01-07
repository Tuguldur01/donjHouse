Template.elite.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('homePlans');
    })
});

Template.elite.helpers({
    elites: function() {
        return homePlans.find({ "category.categoryName": "Элит хаус"});
    }
});