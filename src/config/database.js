const mongoose =require('mongoose')

//we are connecting cluster here
const connectDB=async()=>{
    await mongoose.connect(process.env.MONGO_URL)
}


module.exports={connectDB}