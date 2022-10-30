const router = require('express').Router();
const Notes = require('../models/Notes');

// ADD DATA TO THE NOTES
router.post('/add', async (req, res, next) => {
    try {
        const data = await new Notes(req.body)
        const savedData = await data.save()
        res.status(200).json(savedData)
    } catch (err) {
        next(err);
        console.log(err);
    }
})
// GET DATA TO THE NOTES BY ID
router.get('/get', async (req, res) => {
    try {
        const data = await Notes.find({})
        res.status(200).json(data)
    } catch (err) {
        console.log(err);
    }
})
// GET DATA TO THE NOTES BY ID
router.get('/get/:id', async (req, res) => {
    try {
        const data = await Notes.findById(req.params.id)
        res.status(200).json(data)
    } catch (err) {
        console.log(err);
    }
})
// GET DATA TO THE NOTES BY EMAIL
router.get('/getByEmail', async (req, res) => {
    const reqEmail = req.params.email
    try {
        const data = await Notes.find(reqEmail)
        res.status(200).json(data)
    } catch (err) {
        console.log(err);
    }
})
// DELETE NOTES
router.delete('/delete/:id', async (req, res) => {
    try {
        const data = await Notes.findByIdAndDelete(req.params.id);
        res.status(200).json(data)
    } catch (err) {
        console.log(err);
    }
})

module.exports = router


