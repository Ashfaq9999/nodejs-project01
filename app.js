const express = require('express');
const app = express();
const PORT = 3000;

// Serve static HTML with colorful styling
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Colorful Hello World</title>
      <style>
        body {
          background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
          margin: 0;
        }
        .container {
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
        }
        h1 {
          color: #fff;
          font-size: 3.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          margin: 0;
          animation: colorChange 3s infinite;
        }
        p {
          color: #f0e68c;
          font-size: 1.5rem;
          margin: 1rem 0;
        }
        @keyframes colorChange {
          0% { color: #ff4757; }
          50% { color: #2ed573; }
          100% { color: #1e90ff; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello, World!</h1>
        <p>Welcome to a colorful Express app!</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
