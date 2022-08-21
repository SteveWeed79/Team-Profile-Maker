function createManager(data) {
const HTML = []
data.forEach(emp => {
    HTML.push(`<div class="col-sm-4">
    <div class="card m-1 mb-3 text-center bg-primary border border-dark">
        <div class="card-body">
            <details>
                <summary>
                    <h5 class="card-title">${emp.employeeName}</h5>
                    <h6>click here for more info</h6>
                </summary>
                <p class="card-text">Email: ${emp.email} </p>
                <p class="card-text">Office: ${emp.officeNum}</p>
                <p class="card-text">Id: ${emp.id}</p>
                <p class="card-text">Title: Manager</p>
            </details>
        </div>
    </div>
</div>`)
});
return HTML.join("")
}

function generateHTML(data) {
    return`<!DOCTYPE html>
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
            <div class="jumbotron mt-3 bg-primary rounded text-center mx-4 jumbotron-fluid sticky-top border border-dark">
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
            
        </div>
    
    
    
    </body>
    
    </html>`
}

module.exports = generateHTML
