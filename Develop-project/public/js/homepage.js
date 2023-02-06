
// CODE FOR CREATE TEAM <BUTTON>
let teamNames = [];

let addTeamName = () => {

    const team_name = document.getElementById('TeamName').value


    // checks if
    if (document.getElementById("TeamName").value.length == 0) {
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

    console.log(team_name)
    console.log(response)

};


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('createTeam').addEventListener('click', addTeamName);
});

// CODE FOR ADD GAMERTAG <BUTTON>

let Gamertags = [];

let addGamertag = (ev) => {
    ev.preventDefault();
    let TheGamertag = {
        createGamertag2: document.getElementById('createGamertag2').value

    }


    if (document.getElementById("createGamertag2").value === "") {
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


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('createGamertag').addEventListener('click', addGamertag);
});

// CODE FOR <JOIN TEAM BUTTON>

const joining_team = () => {

    const team_name = document.getElementById('TeamName2').value


    // checks if
    if (document.getElementById("TeamName2").value.length == 0) {
        alert("Must be filled out!")
        return false
    }

    const response = fetch('/api/interaction/join_team', {
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

    console.log(team_name)
    console.log(response)

};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('TeamName2').addEventListener('click', joining_team);
});


// CODE FOR SCHEDULER

let schedules = [];

document.getElementById("scheduleForm").style.display = "none";
let formDisplayed = false;

document.getElementById("displayFormBtn").addEventListener("click", function () {
    if (formDisplayed) {
        document.getElementById("scheduleForm").style.display = "none";
    } else {
        document.getElementById("scheduleForm").style.display = "block";
    }
    formDisplayed = !formDisplayed;
});



document.getElementById("submitBtn").addEventListener("click", function () {
    let schedule = document.getElementById("scheduleInput").value;
    let date = document.getElementById("dateInput").value;
    let time = document.getElementById("timeInput").value;
    if (!schedule || !date || !time) {
        alert("Please enter all the required information");
        return;
    }
    schedules.push({ schedule: schedule, date: date, time: time });
    alert("Schedule added successfully!");
    document.getElementById("scheduleForm").style.display = "none";
});

// CODE FOR LOGOUT

let logout = () => {
    const response = fetch('/api/login/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logoutBtn').addEventListener('click', logout);

});










