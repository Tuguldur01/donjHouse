
Router.route('/', function () {
    //this.render('zasvartai');
    this.render('homeTemplate');
});

//Router.route('/blog', function () {
//    this.render('blogTemplate');
//});

Router.route('/howitworks', function () {
    this.render('howitworks');
});

Router.route('/faq', function () {
    this.render('faq');
});

Router.route('/zuunnast2', function () {
    this.render('zuunnast2');
});

Router.route('/career', function () {
    this.render('career');
});

Router.route('/homeplans', function () {
    this.render('homeplans');
});

Router.route('/contact', function () {
    this.render('contact');
});

Router.route('/homeplans/elite', function () {
    this.render('elite');
});

Router.route('/homeplans/modern', function () {
    this.render('modern');
});

Router.route('/homeplans/songodog', function () {
    this.render('songodog');
});

Router.route('/homeplans/dunzen', function () {
    this.render('dunzen');
});

Router.route('/homeplans/canada', function () {
    this.render('canada');
});

Router.route('/homeplans/engiin', function () {
    this.render('engiin');
});

Router.route('/homeplans/:_id', function () {
    var homePlanss = homePlans.findOne({_id: this.params._id});
    this.render('homeplanSingle', {data: homePlanss});
});

//---------------------------

Router.route('/service/1', function () {
    this.render('suudrevch');
});

Router.route('/service/2', function () {
    this.render('pool');
});

Router.route('/service/3', function () {
    this.render('modonDotorlogoo');
});

//Router.route('/service/4', function () {
//    this.render('gadnaToh');
//});

Router.route('/service/5', function () {
    this.render('hudag');
});

Router.route('admin-sign', function () {
    this.render('admin-sign');
});

//Router.route('/service/6', function () {
//    this.render('tavilga');
//});

//Router.route('/service/7', function () {
//    this.render('material');
//});

Router.route('/service/:_id', function () {
    var services = service.findOne({_id: this.params._id});
    this.render('serviceSingle', {data: services});
});

//Router.route('/blog/:_id', function () {
//    var postss = posts.findOne({_id: this.params._id});
//    this.render('blogSingle', {data: postss});
//});