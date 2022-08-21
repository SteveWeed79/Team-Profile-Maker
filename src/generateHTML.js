function createManager(data) {
    const HTML = []
    data.forEach(emp => {
        HTML.push(`<div class="col-sm-4">
    <div class="card m-1 mb-3 text-center bg-secondary border border-dark">
        <div class="card-body">
            <details>
                <summary>
                    <h5 class="card-title">${emp.employeeName}</h5>
                    <p class="card-text">Manager</p>
                    <h6><em>click to show/hide additional information</em></h6>
                </summary>
                <p class="card-text"><strong>Email: </strong><a href="mailto:${emp.email}"class="text-white">${emp.email}</a></p>
                <p class="card-text"><strong>Office Number: </strong>${emp.officeNum}</p>
                <p class="card-text"><strong>Employee Id: </strong>${emp.id}</p>

            </details>
        </div>
    </div>
</div>`)
    });
    return HTML.join("")
}

function createEngineer(data) {
    const HTML = []
    data.forEach(eng => {
        HTML.push(`<div class="col-sm-4">
        <div class="card m-1 mb-3 text-center bg-secondary border border-dark">
            <div class="card-body">
                <details>
                    <summary>
                        <h5 class="card-title">${eng.employeeName}</h5>
                        <p class="card-text">Engineer</p>
                        <h6><em>click to show/hide additional information</em></h6>
                    </summary>
                    <p class="card-text"><strong>Email: </strong><a href="mailto:${eng.email}"class="text-white"> ${eng.email}</a> </p>
                    <p class="card-text"><strong>gitHub Username: </strong><a href="https://github.com/${eng.gitHub}" target="_blank" class="text-white"><span>${eng.gitHub}</span></a></p>
                    <p class="card-text"><strong>Employee Id: </strong>${eng.id}</p>
                </details>
            </div>
        </div>
    </div>`)
    });
    return HTML.join("")
}

function createIntern(data) {
    const HTML = []
    data.forEach(int => {
        HTML.push(`<div class="col-sm-4">
        <div class="card m-1 mb-3 text-center bg-secondary border border-dark">
            <div class="card-body">
                <details>
                    <summary>
                        <h5 class="card-title">${int.employeeName}</h5>
                        <p class="card-text">Intern</p>
                        <h6><em>click to show/hide additional information</em></h6>
                    </summary>
                    <p class="card-text"><strong>Email: </strong><a href="mailto:${int.email}"class="text-white">${int.email}</a> </p>
                    <p class="card-text"><strong>School Name:</strong> ${int.school}</p>
                    <p class="card-text"><strong>Employee Id: </strong>${int.id}</p>
                </details>
            </div>
        </div>
    </div>`)
    });
    return HTML.join("")
}


function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head>
    
    <body style="background-color:lightgrey">
        <header>
            <div class="jumbotron mt-3 bg-secondary rounded text-center mx-4 jumbotron-fluid sticky-top border border-dark">
                <div class="container">
                    <h1 class="display-4" style="font-size: 400%;"><strong>Your Team</strong></h1>
                    <br>
                    <p class="lead"><strong>Here are the people you work with and some basic information about them</strong>
                    </p>
                </div>
            </div>
        </header>

        <div class="d-flex flex-row flex-wrap">
            ${createManager(data.filter(emp => emp.getRole() === "Manager"))}
            ${createEngineer(data.filter(eng => eng.getRole() === "Engineer"))}
            ${createIntern(data.filter(int => int.getRole() === "Intern"))}
        </div>
    
    
    
    </body>
    
    </html>`
}

module.exports = generateHTML
