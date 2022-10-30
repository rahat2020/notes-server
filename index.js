const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5000
const notesRoute = require('./routes/notes');
const userRoute = require('./routes/users');
const MONGO_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vatpd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
// console.log(MONGO_URL)

mongoose.connect(MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => console.log('database connection established'))
    .catch(err => console.log('error connecting', err))

app.use(cors())
app.use(express.json());
app.use('/notes', notesRoute)
app.use('/users', userRoute)

app.listen(port, () => {
    console.log(`listening port on http://localhost:${port}`)
})

// https://notes-server.up.railway.app/notes/get