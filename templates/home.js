export default function home(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8" />
      <title>Index</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />

      <style>
        body {
          margin: 0;
          padding: 0;
          height: 100vh;
          background-color: #121212;
          color: #ffffff;
          font-family: 'Roboto', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .container {
          max-width: 600px;
          padding: 0 20px;
        }

        h1 {
          font-size: 2.5rem;
          color: #ff0062d0;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.2rem;
          color: #00ffbfeb;
        }

        a {
          color: #ffffffc0;
          margin-right: 2px;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }

          p {
            font-size: 1rem;
          }
        }
      </style>
    </head>

    <body>
      <div class="container">
        <h1>API Endpoints</h1>
        <p>for: <a href="${process.env.FRONTEND_URL}">
            ${process.env.FRONTEND_URL}
          </a>→</p>
      </div>
    </body>

    </html>
  `);
}
