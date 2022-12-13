const mongoose = require('mongoose')
mongoose.set("strictQuery", false);

const password = 'ariane-45'
const dbname = 'pokedex'
const uri = `mongodb+srv://ArianeVargas:${password}@cluster0.cd8e4sg.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = ()=> mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})