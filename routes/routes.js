const express = require('express');
const router = express.Router()
const Model = require('../models/model');

router.use(express.json());

//`res` means response, and `req` means request.

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        id : req.body.id,
        name: req.body.name,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    const val = parseInt(req.params.id);
    try{
        const data = await Model.findOne({ id: parseInt(req.params.id) });
        if(data) res.json(data)
        else res.json([])
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const options = { new: true };
        const result = await Model.updateOne({ id : req.params.id } , req.body , options)
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const data = await Model.deleteOne({ id : req.params.id })
        res.send(`Item has been has been deleted`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;