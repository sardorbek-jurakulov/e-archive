const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

const run = async (DB) => {
  await mongoose.connect(DB, { useNewUrlParser: true }).then(() => {
    console.log('DB connection successful!');
  });
};

run(DB);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});