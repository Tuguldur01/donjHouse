Template.homeplans.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('homePlans');
    })
});

Template.homeplans.helpers({
   homePlanss: function() {
       return homePlans.find();
   }
});

Template.homeplanSingle.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('homePlans');
    })
});

Template.homeplanSingle.onRendered(function () {
    $(document).ready(function(){
        $('.materialboxed').materialbox();
    });
});
