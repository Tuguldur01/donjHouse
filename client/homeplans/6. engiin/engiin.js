Template.engiin.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('homePlans');
    })
});

Template.engiin.helpers({
    engiins: function() {
        return homePlans.find({ "category.categoryName": "Энгийн хаус"});
    }
});