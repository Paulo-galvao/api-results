import e from "express";
import "dotenv/config";
import connectDatabase from "./config/connectDatabase.js";
import resultRoute from "./routes/result.route.js"

const port = process.env.Port || 3042;
const app = e();
connectDatabase();

app.use(e.json());

app.get("/", (req, res) => {res.send("Just check for new results")});
app.use("/results", resultRoute);

app.listen(port, () => {
    console.log("Server running on port", port);
});