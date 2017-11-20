import Mongoose from 'mongoose';

let welcomeUserSchema = new Mongoose.Schema({
    name: {
        type: String,
        require: true
    },
});

export default Mongoose.model('WelcomeUser', welcomeUserSchema);