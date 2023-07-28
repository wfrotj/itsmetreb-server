import app from "./app.js";
import config from "./utils/config.js";

app.get("/", (_req, res) => {
  res.send("Hello World!");
});
app.listen(config.PORT, () => {
  console.log(`Live at port: ${config.PORT}`);
});
