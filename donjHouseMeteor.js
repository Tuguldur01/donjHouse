if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function() {

  });
}


AdminConfig = {
  name: 'donjHouse',
  adminEmails: ['tuguldur.01@gmail.com'],
  collections: {
    homePlans: {},
    service: {},
    posts: {}
  }

};

Meteor.startup(function(){
  process.env.MAIL_URL = 'smtp://donjhouse1@gmail.com:donj99101333@smtp.gmail.com:587/'
});

