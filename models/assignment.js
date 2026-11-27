// Import mongoose, which lets us define the data structure
const {default: mongoose} = require("mongoose");

// defining the schema/blueprint for each assignment document, as well as the value field names
let assignmentModel = mongoose.Schema({
    type: String, //type of evalution: assignment, test, etc
    courseCode: String, //which course the assignment is for
    description: String, //details about the task
    dueDate: Date, //when is the task/assignment due, stored as a real Date for formatting
    priorityLevel: String //how important is this task? Low, medium, or high
}, 
// use the collection I created, named "Assignments"
{
    collection: "Assignments"
});
// export the model so it can be used elsewhere
module.exports=mongoose.model('Assignment', assignmentModel);