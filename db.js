const { connect } = require("mongoose");

const connectDb = async () => {
  try {
    await connect(process.env.MONGODB_URI || "mongodb+srv://sebas16cely:S1lyF1xIibBJXavB@cluster0.czifmw4.mongodb.net/?retryWrites=true&w=majority");
    console.log("Mongodb connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDb };
