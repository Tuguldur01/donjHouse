service = new Mongo.Collection('service');

service.allow({
    insert: function(userID, doc) {
        return !!userID;
    }
});

Category = new SimpleSchema({
    categoryName: {
        type: String,
        label: "Төрлий нэр",
        allowedValues: ['suudrevch', 'pool', 'modonDot', 'gadnaTohijilt', 'guniiHudag', 'modonTavilga', 'bMaterial'],
        autoform: {
            options: [
                {label: "Сүүдрэвч", value: "suudrevch"},
                {label: "Бассейн", value: "pool"},
                {label: "Модон Доторлогоо", value: "modonDot"},
                {label: "Гадна тохижилт", value: "gadnaTohijilt"},
                {label: "Гүний худаг", value: "guniiHudag"},
                {label: "Модон тавилга", value: "modonTavilga"},
                {label: "Барилгын материал", value: "bMaterial"}
            ]
        }
    },
    description: {
        type: String
    }
});

serviceSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Гарчиaг"
    },
    url: {
        type: String,
        label: "Зургийн хаяг"
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
    category: {
        type: Category
    }
});

service.attachSchema(serviceSchema);