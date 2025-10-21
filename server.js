const express = require('express');
const path = require('path');
const pdfRoutes = require('./routes/pdfRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', pdfRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});