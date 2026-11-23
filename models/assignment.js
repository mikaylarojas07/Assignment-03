const {default: mongoose} = require("mongoose");

let assignmentModel = mongoose.Schema({
    type: String, 
    courseCode: String, 
    description: String, 
    dueDate: String, 
    priorityLevel: String
}, 
{
    Collection: "Assignments"
});

module.exports=mongoose.model('Assignment', assignmentModel);