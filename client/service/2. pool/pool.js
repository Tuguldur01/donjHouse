Template.pool.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('service');
    })
});

Template.pool.helpers({
    pools: function() {
        return service.find({ "category.categoryName": "pool"});
    }
});