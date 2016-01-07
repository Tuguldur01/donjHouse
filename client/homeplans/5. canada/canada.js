Template.canada.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('homePlans');
    })
});

Template.canada.helpers({
    canadas: function() {
        return homePlans.find({ "category.categoryName": "Канад хаус"});
    }
});