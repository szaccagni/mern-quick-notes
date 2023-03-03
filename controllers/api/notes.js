const Note = require('../../models/note')

module.exports = {
    index,
    create
}

async function index(req, res) {
    let notes = []
    if (req.user) {
        notes = await Note.find({user: req.user._id})
    }
    res.json(notes)  
    // return notes
}

async function create(req,res) {
    const note = await Note.create(req.body.note)
    res.json(note)
}