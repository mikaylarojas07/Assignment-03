let express = require('express');
let router = express.Router();
let Assignment = require('../models/assignment');

let mongoose = require('mongoose');

//viewing assignment logs
router.get('/', async (req, res, next) => {
    try {
        const Assignmentlist = await Assignment.find();
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

// creating a new assignment
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

//post operation
router.post('/create', async (req, res, next) => {
    try {
        let newAssignment = Assignment({
            "type": req.body.type,
            "courseCode": req.body.courseCode,
            "description": req.body.description,
            "dueDate": req.body.dueDate,
            "priorityLevel": req.body.priorityLevel,
        });
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

// edit
router.get('/edit/:id', async(req, res, next)=>{
    try{
        const id = req.params.id;
        const AssignmentToEdit = await Assignment.findById(id);
        res.render('edit', {
            title: 'Edit Assignment', 
            assignment: AssignmentToEdit
        })
    }
    catch(err){
        console.error(err);
        next(err);
    }
    });

    router.post('/edit/:id', async(req, res, next)=>{
        try{
            let id = req.params.id;
            let updatedAssignment = {
                "type": req.body.type,
                "courseCode": req.body.courseCode,
                "description": req.body.description,
                "dueDate": req.body.dueDate,
                "priorityLevel": req.body.priorityLevel,
            };
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

    //delete operation
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