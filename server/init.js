if (Meteor.isServer) {
    Meteor.methods({
        sendEmail: function(doc) {
            // Important server-side check for security and data integrity
            //check(doc, Schema.contact);

            // Build the e-mail text
            var text = "Name: " + doc.name + "\n\n"
                + "Email: " + doc.email + "\n\n\n\n"
                + doc.message;

            this.unblock();

            // Send the e-mail
            Email.send({
                to: "donjhouse1@gmail.com",
                from: doc.email,
                subject: "Сайтаас ирсэн хэрэглэгчийн захиа " + doc.name,
                text: text
            });
        }
    });
}