require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 4000;

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
