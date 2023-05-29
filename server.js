const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});