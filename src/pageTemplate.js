function generateEmployee(data) {
  let cardMaker = "";
  data.forEach((index) => {
    if (index.getRole() == "Manager") {
      cardMaker += `
        <div class="card shadow m-2 p-3 mb-5 bg-dark rounded"
          style="width: 18rem">
          <div class="card-body">
            <div class="bg-dark p-2 rounded text-light">
              <h5 class="card-title" id="name">${index.name}</h5>
              <h5 class="card-title" id="position">
                <span><i class="fas fa-coffee"></i></span> Manager</h5>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" id="id">Id: ${index.id}</li>
            <li class="list-group-item" id="email">
              Email: <a href="mailto: ${index.email}">${index.email}</a></li>
            <li class="list-group-item">Office Number: ${index.officeNumber}</li>
          </ul>
        </div>`;
    } else if (index.getRole() == "Engineer") {
      cardMaker += `
      <div class="card shadow m-2 p-3 mb-5 bg-secondary rounded"
        style="width: 18rem">
        <div class="card-body">
          <div class="bg-dark p-2 rounded text-light">
            <h5 class="card-title" id="name">${index.name}</h5>
            <h5 class="card-title" id="position">
              <span><i class="fas fa-glasses"></i></span> Engineer</h5>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="id">Id: ${index.id}</li>
          <li class="list-group-item" id="email">
            Email: <a href="mailto: ${index.email}">${index.email}</a></li>
          <li class="list-group-item">GitHub User: ${index.github}</li>
        </ul>
      </div>`;
    } else {
      cardMaker += `
      <div class="card shadow m-2 p-3 mb-5 bg-light rounded"
        style="width: 18rem">
        <div class="card-body">
          <div class="bg-dark p-2 rounded text-light">
            <h5 class="card-title" id="name">${index.name}</h5>
            <h5 class="card-title" id="position">
              <span><i class="fas fa-user-graduate"></i></span> Intern</h5>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="id">Id: ${index.id}</li>
          <li class="list-group-item" id="email">
            Email: <a href="mailto: ${index.email}">${index.email}</a></li>
          <li class="list-group-item">School Name: ${index.school}</li>
        </ul>
      </div>`;
    }
  });
  return cardMaker;
}

module.exports = { generateEmployee };
