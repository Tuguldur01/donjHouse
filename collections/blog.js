posts = new Mongo.Collection('posts');

posts.allow({
    insert: function(userID, doc) {
        return !!userID;
    }
});

postSchema = new SimpleSchema({
        title: {
            type: String,
            label: 'Title'
        },
        url: {
            type: String,
            label: "Зургийн хаяг"
        },
        body: {
            type: String,
            label: "Тайлбар"
        },
        content: {
            type: String,
            label: "Контент",
            autoform: {
                afFieldInput: {
                    type: 'summernote',
                    class: 'editor'
                }
            }
        },
        userId: {
            type: String,
            autoValue: function() {
                return this.userId
            },
            autoform: {
                type: "hidden"
            }
        },
        createdAt: {
            type: Date,
            autoValue: function() {
                return new Date()
            },
            autoform: {
                type: "hidden"
            }
        }
    }
);

posts.attachSchema(postSchema);