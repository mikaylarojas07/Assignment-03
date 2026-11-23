const {default: mongoose} = require("mongoose");

let assignmentModel = mongoose.Schema({
    type: String, 
    courseCode: String, 
    description: String, 
    dueDate: Date, 
    priorityLevel: String
}, 
{
    collection: "Assignments"
});

module.exports=mongoose.model('Assignment', assignmentModel);