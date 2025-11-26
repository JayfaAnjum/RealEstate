import mongoose from 'mongoose';


const connectDatabase = async ()=>{

    try{
    await mongoose.connect(process.env.MONGO_URI)

    console.log("mongodb databse connected sucesfully")
    }

    catch(e){

        console.log(e);
    }

}

export default connectDatabase;