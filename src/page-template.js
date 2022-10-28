const generateTeam = team => {
const html = [];
    // create the manager html
    const generateManager = manager => {
       let managerHtml = `
       <div class="card" style="width: 18rem;">
       <div class="card-body">
         <h5 class="card-title">${manager.name}</h5>
         <ul class="list-group list-group-flush">
         <li>${manager.id}</li>
         <li>${manager.email}</li>
         <li>${manager.officeNumber}</li>
         </ul>
       </div>
     </div>
     `;
     html.push(managerHtml);
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.name}</h5>
          <ul class="list-group list-group-flush">
          <li>${engineer.id}</li>
          <li>${engineer.email}</li>
          <li>${engineer.github}</li>
          </ul>
        </div>
      </div>
      `;
      html.push(engineerHtml);
    };

    // create the html for interns
    const generateIntern = intern => {
        let internHtml = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.name}</h5>
          <ul class="list-group list-group-flush">
          <li>${intern.id}</li>
          <li>${intern.email}</li>
          <li>${intern.school}</li>
          </ul>
        </div>
      </div>
      `;
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
       <title>Document</title>
   </head>
   <body>
  
   ${generateTeam(team)}
   </body>
   </html>`
}

// add cards above