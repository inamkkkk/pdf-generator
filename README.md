# PDF Generator API

A Node.js API for generating PDF documents from HTML.

## Features

*   Generates PDFs from HTML input.
*   Uses `puppeteer` for PDF generation.
*   Includes basic error handling.
*   Simple API endpoint for PDF generation.

## Installation

1.  Clone the repository.
2.  Run `npm install` to install dependencies.

## Usage

1.  Start the server with `node server.js`.
2.  Send a POST request to `/generate-pdf` with the HTML content in the request body.

    
    {
      "html": "<h1>Hello, World!</h1><p>This is a test PDF.</p>"
    }
    

3.  The API will return a JSON response with the path to the generated PDF file.

## Dependencies

*   Node.js
*   npm
*   Express
*   Puppeteer
*   uuid

## License

MIT