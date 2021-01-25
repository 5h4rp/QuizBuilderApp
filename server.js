const express = require('express');
const connectDB = require('./config/db');
const quesRouter = require('./routes/api/questions');

const app = express();
// hello
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.use('/questions', quesRouter);

app.get('/', (req, res) => {
  res.send('Welcome');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
