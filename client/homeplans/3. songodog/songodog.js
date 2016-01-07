Template.songodog.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('homePlans');
    })
});

Template.songodog.helpers({
    classics: function() {
        return homePlans.find({ "category.categoryName": "Сонгодог хаус"});
    }
});