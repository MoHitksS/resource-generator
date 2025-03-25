let fs = require("fs");
const mongoose = require("mongoose");
require("dotenv").config();

async function connectDatabase() {
  const {
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE,
  } = process.env;

  // MongoDB URI (without database name)
  const URI = `mongodb://${DATABASE_USER}:${
    DATABASE_PASSWORD || ""
  }@${DATABASE_HOST}:${DATABASE_PORT}/admin`;

  console.log(URI);
  const connection = await mongoose
    .connect(URI, {
      dbName: DATABASE,
      autoIndex: false,
    })
    .then(() => {
      const preDataSchema = new mongoose.Schema({
        real_id: { type: String },
        game_name: { type: String },
        context: { type: Object },
        modes: { type: Object },
        settings: { type: Object },
      }, { timestamps: true });

      let preData = mongoose.model("booongo_game_pre_data", preDataSchema);
      runCode(preData);
    })
    .catch((err) => {
      console.log("Not Connected to Database ERROR! ", err);
    });
}

function runCode(preData) {
  let preDataObj = {};
  let filePath = "./pre-data.json"
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return;
    }
    try {
      preDataObj = JSON.parse(data);
      const { real_id, game_name, context, modes, settings } = preDataObj;
      let preDataNewObj = { real_id, game_name, context, modes, settings };
      let realGameID = real_id;
      addOrUpdatePreData(realGameID, preDataNewObj);
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
    }
  });

  const addOrUpdatePreData = async (realGameID, preDataNewObj) => {
    try {
      const updatedPreData = await preData.findOneAndUpdate(
        { real_id: realGameID }, // Search condition
        { $set: preDataNewObj }, // Data to update or insert
        { upsert: true, new: true, timeout: 30000 } // Options: upsert creates if not exist, new returns updated doc
      );
      console.log("Pre Data added/updated:");

      
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          console.error("File does not exist or cannot be accessed");
          return;
        }
      
        fs.unlink(filePath, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Error deleting the file:", unlinkErr);
            return;
          }
          console.log("File deleted successfully!");
        });
      });

    } catch (error) {
      console.error("Error in addOrUpdateUser:", error);
    }
  };
}

connectDatabase();
