import mongoose from "mongoose"

const connectDB = async () => {
    if(mongoose.connection[0].readyState) {
        return true;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Mongodvb connected')
        return true
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;