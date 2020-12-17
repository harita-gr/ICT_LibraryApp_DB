const mongoose = require('mongoose');
//DB Connection
// mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@cluster0.akfoz.mongodb.net/libraryapp?retryWrites=true&w=majority');
//Schema
const Schema = mongoose.Schema;

const UserSchema =  new Schema({

    // name: {
    //     type: String,
    //     required: [true,'Please tell us your name!']
    // },
    // email:{
    //     type:String,
    //     required:[true,'Please provide your email!'],
    //     unique:true,
    //     lowercase:true
    // },
    // dob:{
    //     type:String,
    //     required: [true,'Please tell us your Date of Birth!']
    // },
    // // photo: String,
    // password:{
    //     type:String,
    //     required: [true,'Please provide a password!'],
    //     minlength:8
    // }

    name: String,
    email: String,
    dob: Date,
    password:String
});

//Model
var Userdata = mongoose.model('userdata',UserSchema);

module.exports = Userdata;

