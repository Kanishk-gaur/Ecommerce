const app = require("./app");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary")
const connectDatabase = require("./config/database")


//handilg uncaught exception
process.on("uncaughtException", err => {
   console.log(`Error:${err.message}`);
   console.log(`Shitting down server due to some uncaught error`);
   process.exit(1);
})


dotenv.config({ path: "backend/config/config.env" })

connectDatabase();

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
})



const server = app.listen(process.env.PORT, () => {
   console.log(`Server is working on http://localhost:${process.env.PORT}`)
})
//unhabdeled promise
process.on("unhandledRejection", err => {
   console.log(`Error: ${err.message}`);
   console.log(`Shitting down server due to some internal problem`);
   server.close(() => {
      process.exit(1);
   })
})