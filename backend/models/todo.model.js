const dynamoose = require("dynamoose");

const TodoSchema = new dynamoose.Schema({
    "title": String,
    "label": String,
    "completed": Boolean,
}, {
    "saveUnknown": true,
    "timestamps": true
});

const Todo = dynamoose.model('Todo', TodoSchema);

Todo.create({
    "title": "testitem",
    "label": "testlabel",
    "completed": false,
    "createdAt": Date.now()
});
module.exports = Todo;