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

Template.homeplanSingle.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('Images');
    })
});

Template.homeplanSingle.events({
        "change .myFileInput": function(event, template) {
            FS.Utility.eachFile(event, function(file) {
                Images.insert(file, function (err, fileObj) {
                    if (err){
                        alert("zurag oruulah aldaa: "+err)
                    } else {
                        alert("bolj bn");
                        // handle success depending what you need to do
                        var imagesURL = {
                      "profile.image": "/cfs/files/images/" + fileObj._id
                    };
                        console.log(imagesURL);
                    }
                });
            });
        }
    }
);

Template.homeplanSingle.helpers({
    Images: function() {
        return Images.find();
    }
});