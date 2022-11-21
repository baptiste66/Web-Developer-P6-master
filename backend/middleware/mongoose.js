const mongoose = require('mongoose');

const user=process.env.user
const password= process.env.password
//connexion mongoose
mongoose.connect(`mongodb+srv://${user}:${password}@cluster2.thsotrz.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  module.exports= mongoose