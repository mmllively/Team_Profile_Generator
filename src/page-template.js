const generateTeam = team => {
const html = [];
    // create the manager html
    const generateManager = manager => {
       let managerHtml = `
       <div class="row">
  <div class="col-sm-6">
       <div class="card" style="width: 18rem;">
       <div class="card-body">
         <h5 class="card-title bg-primary text-center">${manager.name}</h5>
         <ul class="list-group list-group-flush">
         <li>${manager.id}</li>
         <li>${manager.email}</li>
         <li>${manager.officeNumber}</li>
         </ul>
       </div>
     </div>
  </div>
  </div>`
     ;
     html.push(managerHtml);
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        let engineerHtml = `
        <div class="row">
        <div class="col-sm-6">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title bg-primary text-center">${engineer.name}</h5>
          <ul class="list-group list-group-flush">
          <li>${engineer.id}</li>
          <li>${engineer.email}</li>
          <li>${engineer.github}</li>
          </ul>
        </div>
      </div>
      </div>
  </div>`
      ;
      html.push(engineerHtml);
    };

    // create the html for interns
    const generateIntern = intern => {
        let internHtml = `
        <div class="row">
        <div class="col-sm-6">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title bg-primary text-center">${intern.name}</h5>
          <ul class="list-group list-group-flush">
          <li>${intern.id}</li>
          <li>${intern.email}</li>
          <li>${intern.school}</li>
          </ul>
        </div>
      </div>
      </div>
  </div>`
      ;
      html.push(internHtml);
    };

    // use the team array to generate pieces of html based on the employee role
  for (let i = 0; i < team.length; i++) {
  console.log(team[i].getRole());
  const role = team[i].getRole();

  if (role==="Manager") {
    generateManager(team[i]);
  } else if(role==="Engineer") {
    generateEngineer(team[i]);
  }else {
    generateIntern(team[i]);
  }
    //if statement to run corresponding function 
  }
  return html;
// console.log("this is html", html);
}

module.exports = team => {
    // template literal - html body that calls the generate team function
   return `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
       <link rel = "stylesheet" href = "style.css">
       <title>Document</title>
   </head>
   <div class="jumbotron jumbotron-fluid bg-success">
   <div class="container">
     <h1 class="display-4">Team Profile</h1>
   </div>
 </div>
   <body>
   <div class= "container">
   <div class="row row-cols-3">
   ${generateTeam(team)}
   </div>
   </body>
   </html>`
}
