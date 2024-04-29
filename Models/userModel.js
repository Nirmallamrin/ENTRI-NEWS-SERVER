import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    username:String,
    email:String,
    password:String,
    createdAt:Date
  });

const User = mongoose.model('users', userSchema, "users");

export default User;






// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: String,
//     username:String,
//     email:String,
//     password:String
//   });

// const User = mongoose.model('user', userSchema, "users");

//   async function main() {
//     await mongoose.connect('mongodb+srv://nirmallamrin77:45boDqwdktmqjjGu@cluster0.79xr2yp.mongodb.net/FSDCrashCourse');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

// main().then(console.log("connected to DB")).catch(err => console.log(err));

//  export default User;

