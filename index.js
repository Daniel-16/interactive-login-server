const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/User.Router");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
//Routes
app.use("/api/auth", router);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server listening at port ${process.env.PORT || 4000}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
