contact = new Meteor.Collection('contacts');

Schema = {};

Schema.contact = new SimpleSchema({
    name: {
        type: String,
        label: "Таны нэр",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail хаяг"
    },
    message: {
        type: String,
        label: "Захиа",
        max: 1000
    }
});