import mongoose from "mongoose";
const schema = mongoose.Schema;

let Userlist = new schema({
    mail:{
        type:String
    }
});

export default mongoose.model('User List',User_List)
