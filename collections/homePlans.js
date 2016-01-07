homePlans = new Mongo.Collection('homePlans');

homePlans.allow({
    insert: function(userID, doc) {
        return !!userID;
    }
});

Category = new SimpleSchema({
    categoryName: {
        type: String,
        allowedValues: ['Элит хаус', 'Модерн хаус', 'Сонгодог хаус', 'Дүнзэн хаус', 'Канад хаус', 'Энгийн хаус'],
        autoform: {
            options: [
                {label: "Элит хаус", value: "Элит хаус"},
                {label: "Модерн хаус", value: "Модерн хаус"},
                {label: "Сонгодог хаус", value: "Сонгодог хаус"},
                {label: "Дүнзэн хаус", value: "Дүнзэн хаус"},
                {label: "Канад хаус", value: "Канад хаус"},
                {label: "Энгийн хаус", value: "Энгийн хаус"}
            ]
        }
    },
    description: {
        type: String
    }
});

homePlansSchema = new SimpleSchema({
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

homePlans.attachSchema(homePlansSchema);