const mongoose = require('mongoose');

const NoteShema = new mongoose.Schema({
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    email:{ type: 'string', required: true}
    // title: { type: 'string' }
}, { timeStamp: true })

module.exports = mongoose.model('Note', NoteShema)
