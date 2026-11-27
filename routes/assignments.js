//handles the CRUD operations 

let express = require('express');
let router = express.Router();
//import the Assignment model, connecting routes to my MONGODB collection
let Assignment = require('../models/assignment');

let mongoose = require('mongoose');

//READ operation: GET /assignments
//shows every assignment in the database on the list page (views/list.ejs)
router.get('/', async (req, res, next) => {
    try {
        const Assignmentlist = await Assignment.find();
        //render list.ejs
        res.render('list', {
            title: 'My Assignments',
            Assignmentlist: Assignmentlist
        })
    }
    catch (err) {
        console.log(err);
        res.render('list', {
            error: 'Error on Server'
        })
    }
});

// CREATE operation: GET /assignments/create
//displays the empty 'Add assignment' form (views/create.ejs)
router.get('/create', async(req, res, next)=>{
    try{
        res.render('create', {
            title: 'Add assignment'
        });
    }
    catch(err){
        console.error(err);
        res.render('list', {
            error: 'Error on Server'
        })
    }
})

//CREATE operation: POST /assignments/create
//runs when create form is SUBMITTED. Reads the form fields and saves a new document in MONGODB
router.post('/create', async (req, res, next) => {
    try {
        //the keys on the right match the "name" attributes of the inputs from create.ejs
        let newAssignment = Assignment({
            "type": req.body.type,
            "courseCode": req.body.courseCode,
            "description": req.body.description,
            "dueDate": req.body.dueDate,
            "priorityLevel": req.body.priorityLevel,
        });
        //save thenew document, then send user back to the list to view it
        Assignment.create(newAssignment).then(()=>{
            res.redirect('/assignments')
        });
    }
    catch(err){
        console.error(err);
        res.render('list', {
            error: 'Error on server'
        })
    }
});

// UPDATE operation: GET /assignments/edit/:id
// finds the assignment whose _id is in the url and shows the edit form pre-filled with its values
router.get('/edit/:id', async(req, res, next)=>{
    try{
        // refers to the unique _id of the clicked assignment
        const id = req.params.id;
        const AssignmentToEdit = await Assignment.findById(id);
        res.render('edit', {
            // pass the found document to edit.ejs as "assignment" so the inputs can be filled
            title: 'Edit Assignment', 
            assignment: AssignmentToEdit
        })
    }
    catch(err){
        console.error(err);
        next(err);
    }
    });
//UPDATE operation: POST /assignments/edit/:id
// runs when then edit form is submitted, saves new values. 
    router.post('/edit/:id', async(req, res, next)=>{
        try{
            let id = req.params.id;
            // collect edited form values
            let updatedAssignment = {
                "type": req.body.type,
                "courseCode": req.body.courseCode,
                "description": req.body.description,
                "dueDate": req.body.dueDate,
                "priorityLevel": req.body.priorityLevel,
            };
            //finds the document by id and replaces the fields with the new value(s)
            Assignment.findByIdAndUpdate(id, updatedAssignment).then(()=>{
                res.redirect('/assignments')
            }).catch((err)=>{
                console.error(err);
                res.redirect('/assignments');
            });
        }
        catch(err){
            console.error(err);
            res.render('list', {
                title: 'My Assignments', 
                Assignmentlist: [], 
                error: 'Error on Server'
            })
        }
    });

//DELETE operation: GET /assignments/delete/:id
//Triggered by the Mark as Done button in list.ejs
//Remove the assignment with this _id from the database, then return to the assignment list
    router.get('/delete/:id', async(req, res, next)=>{
        try{
            let id = req.params.id;
            Assignment.deleteOne({_id:id}).then(()=>{
                res.redirect('/assignments')
            })
        }
        catch(err){
            console.error(err);
            res.render('list', {
                title: 'My Assignments', 
                Assignmentlist: [], 
                error: 'Error on Server',
            })
        }
    });

    module.exports = router;