import mongoose from "mongoose"

const Connection = async (url) => {
    try {
        
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

        console.log("Database  is connected")
    }
    catch (err) {
        console.log("error is ", err)
    }

}
export default Connection;
