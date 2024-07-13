import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Restaurant",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to database successfully");
    }).catch((err) => {
        console.error(`Some error occurred while connecting to the database: ${err}`);
    });
};
