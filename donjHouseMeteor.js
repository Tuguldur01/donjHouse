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



