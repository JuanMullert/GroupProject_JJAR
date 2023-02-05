
 // CODE FOR CREATE TEAM <BUTTON>
let teamNames = [];

    let addTeamName = ()=>{
        
        const team_name = document.getElementById('TeamName').value
            
 
        // checks if
        if(document.getElementById("TeamName").value.length == 0) {
            alert("Must be filled out!")
            return false
        }

        const response = fetch('/api/interaction/team_create', {
            method: 'POST',
            body: JSON.stringify({ team_name }),
            headers: { 'Content-Type': 'application/json' },
        });
        // if (teamNames.find(team => team.TeamName === groupName.TeamName)) {
        //     alert("Choose another name, this one is already taken.");
        //     return false;
        // }

        // teamNames.push(groupName);  

        document.forms[0].reset(); // to clear the form for the next entries

        console.log(teamNames)
        console.log(response)
    
    };
    

    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('createTeam').addEventListener('click', addTeamName);
    
    });

    // CODE FOR ADD GAMERTAG <BUTTON>

    let Gamertags = [];

    let addGamertag = (ev)=>{
        ev.preventDefault();
        let TheGamertag = {
            createGamertag2: document.getElementById('createGamertag2').value
            
        }
 
        
        if(document.getElementById("createGamertag2").value === "") {
            alert("Must be filled out!");
            return false;
        
        }
        

        if (Gamertags.find(game => game.createGamertag2 === TheGamertag.createGamertag2)) {
            alert("Choose another gamertag, this one is already taken.");
            return false;
        }

        Gamertags.push(TheGamertag);  
        document.forms[0].reset(); // to clear the form for the next entries

        console.log(Gamertags)
    
    };
    

    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('createGamertag').addEventListener('click', addGamertag);

    
    });

    // CODE FOR <JOIN TEAM BUTTON>

    let joinTeamButton = document.getElementById("joinTeamButton");
joinTeamButton.addEventListener("click", () => {
    let teamNamesList = teamNames.map(team => `<button class="team-name">${team.TeamName}</button>`).join("");
    document.getElementById("teamNamesDisplay").innerHTML = `The teams are:<br><br>${teamNamesList}`;

    let teamNameButtons = document.querySelectorAll(".team-name");
    teamNameButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert(`You have joined the team: ${button.innerHTML}`);
        });
    });
});



    // CODE FOR SCHEDULER

  let schedules = [];

document.getElementById("scheduleForm").style.display = "none";
let formDisplayed = false;

document.getElementById("displayFormBtn").addEventListener("click", function() {
  if (formDisplayed) {
    document.getElementById("scheduleForm").style.display = "none";
  } else {
    document.getElementById("scheduleForm").style.display = "block";
  }
  formDisplayed = !formDisplayed;
});



document.getElementById("submitBtn").addEventListener("click", function() {
let schedule = document.getElementById("scheduleInput").value;
let date = document.getElementById("dateInput").value;
let time = document.getElementById("timeInput").value;
if (!schedule || !date || !time) {
alert("Please enter all the required information");
return;
}
schedules.push({schedule: schedule, date: date, time: time});
alert("Schedule added successfully!");
document.getElementById("scheduleForm").style.display = "none";
});




    

    
