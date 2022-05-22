const express = require("express");
const userRouter = require("./routes/user.routes");
const pointRouter = require("./routes/point.routes");
const topGamer = require("./routes/topGamer.routes");
const errorHeandler = require("./Middleware/errorMiddleware");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", pointRouter);
app.use("/api", topGamer);
app.use(errorHeandler);
app.listen(PORT, () => console.log(`server  ${PORT}`));
