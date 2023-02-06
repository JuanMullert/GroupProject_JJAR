
// CODE FOR CREATE TEAM <BUTTON>

let addTeamName = () => {

    const team_name = document.getElementById('TeamName').value


    // checks if the input isn't blank
    if (document.getElementById("TeamName").value.length == 0) {
        alert("Must be filled out!")
        return false
    }

    const response = fetch('/api/interaction/team_create', {
        method: 'POST',
        body: JSON.stringify({ team_name }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.forms[0].reset(); // to clear the form for the next entries

    console.log(team_name)
    console.log(response)

};


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('createTeam').addEventListener('click', addTeamName);
});

// CODE FOR ADD GAMERTAG <BUTTON>
let changeGamerTag = () => {

    const gamer_tag = document.getElementById('createGamertag2').value

    if (document.getElementById("createGamertag2").value === "") {
        alert("Must be filled out!");
        return false;
    }

    const response = fetch('/api/interaction/change_tag', {
        method: 'POST',
        body: JSON.stringify({ gamer_tag }),
        headers: { 'Content-Type': 'application/json' },
    });

    document.forms[0].reset(); // to clear the form for the next entries

    console.log(gamer_tag)
    console.log(gamer_tag)
};


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('createGamertag').addEventListener('click', changeGamerTag);
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
    document.forms[0].reset(); // to clear the form for the next entries

    console.log(team_name)
    console.log(response)

};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('joinTeamButton').addEventListener('click', joining_team);
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
    console.log(schedules)
});

// CODE FOR LOGOUT
let logout = () => {
    fetch('/api/login/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => {
            if (res.ok) {
                // logout was successful, redirect to the login page
                window.location.replace('/api/login');
            }
        });
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logoutBtn').addEventListener('click', logout);
});

// CODE FOR USER INFORMATION (SIDEBAR DISPLAY)

const display_user = () => {
    // event.preventDefault()
    fetch('api/interaction/user_info')
        .then(res => res.json())
        .then(info => {
            let gamer_tag = document.getElementById('info1')
            let team_name = document.getElementById('info2')
            let team_password = document.getElementById('info3')

            gamer_tag.innerText = info[0]
            team_name.innerText = info[1]
            team_password.innerText = info[2]
        })
        .catch(error => console.error(error))
}

display_user()
