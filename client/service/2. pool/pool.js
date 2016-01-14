Template.pool.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('pool');
    })
});

Template.pool.helpers({
    pools: function() {
        return service.find();
    }
});