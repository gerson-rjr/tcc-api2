const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://gersonjr:juninhog11@cluster0.lreck.mongodb.net/transparencia_natal?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
mongoose.Promise = global.Promise
module.exports = mongoose;