require('./models/user')
require('./models/userData')
const express = require('express');
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const bodyParser = require('body-parser');
const userDataRoute = require('./routes/userDataRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();
app.use(bodyParser.json())
app.use(authRoutes);
app.use(userDataRoute);
const mongoUri = 'mongodb://admin:Tanmay3610@cluster0-shard-00-00.qymuw.mongodb.net:27017,cluster0-shard-00-01.qymuw.mongodb.net:27017,cluster0-shard-00-02.qymuw.mongodb.net:27017/test?ssl=true&replicaSet=atlas-lu7c46-shard-0&authSource=admin&retryWrites=true&w=majority';
// 'mongodb+srv://admin:Tanmay3610@cluster0.qymuw.gcp.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo Instance')
})

mongoose.connection.on('error', (err) => {
    console.log('Connection Error', err);
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Your Email: ${req.user.email}`)
});

app.listen(3000, () => {
    console.log('Listening on Port 3000')
});