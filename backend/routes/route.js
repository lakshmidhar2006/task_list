const express = require('express');
const router = express.Router();
const task = require('../models/schema');

// GET all tasks
router.get('/', async (req, res) => {
    try {
        const data = await task.find();
        res.status(200).json(data);
    } catch (e) {
        res.status(500).json({ error: "Internal server error" });
    }
});
router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const data = await task.findById(id);
        res.status(200).json(data);
    } catch (e) {
        res.status(500).json({ error: "Internal server error" });
    }
});


// CREATE a new task
router.post('/', async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;
        const newTask = new task({ title, description, dueDate });
        await newTask.save();
        res.status(200).json(newTask);
    } catch (e) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// UPDATE a task
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description, dueDate } = req.body;
        const updatedTask = await task.findByIdAndUpdate(
            id,
            { title, description, dueDate },
            { new: true }
        );
        res.status(200).json(updatedTask);
    } catch (e) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// DELETE a task
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedTask = await task.findByIdAndDelete(id);
        res.status(200).json(deletedTask);
    } catch (e) {
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
