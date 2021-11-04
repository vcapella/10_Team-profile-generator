const { generateEmployee } = require("./pageTemplate");

function generateHTML(data) {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"/>
    <title>Team Generator</title>
  </head>
  <body>
    <br />
    <div class="row col-8 mx-auto">
      <div class="jumbotron jumbotron-fluid bg-success padding rounded p-3">
        <div class="container">
          <h1 class="display-4 text-center text-light">My Team</h1>
        </div>
      </div>
      <div class="row justify-content-center" id="dynaCards">
      ${generateEmployee(data)}  
      </div>
    </div>
  </body>
</html>`;
}

module.exports = generateHTML;
