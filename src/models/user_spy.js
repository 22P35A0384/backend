// import mongoose from "mongoose";
// const schema = mongoose.Schema;

// let User_Spy = new schema({
//     mail:{
//         type:String
//     },
//     login:{
//         type:Object
//     },
//     History:{
//         type:Object
//     }
// });

// export default mongoose.model('User History',User_Spy)

import mongoose from 'mongoose';

const userSpySchema = new mongoose.Schema({
    mail: { type: String, required: true, unique: true },
    login: { type: [String], default: [] }
});

const user_spy = mongoose.model('User History', userSpySchema);

export default user_spy;
