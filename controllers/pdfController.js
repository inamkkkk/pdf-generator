const pdfService = require('../utils/pdfService');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const generatePdf = async (req, res, next) => {
  try {
    const html = req.body.html;
    if (!html) {
      return res.status(400).json({ error: 'HTML content is required' });
    }

    const filename = `pdf-${uuidv4()}.pdf`;
    const filePath = path.join(__dirname, '../pdfs', filename);

    await pdfService.generatePdf(html, filePath);

    res.status(201).json({ path: `/pdfs/${filename}` });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generatePdf,
};