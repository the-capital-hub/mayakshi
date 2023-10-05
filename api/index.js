import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//routes
import contactUsRoutes from "./routes/contactUsRoutes.js";

dotenv.config();
const app = express();
const PORT = 8000;

//middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

//routes
app.get("/", (req, res) => {
  res.send("Mayakshi Backend");
});

//routes
app.use("/api", contactUsRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
