 

let teamNames = [];

    const addTeamName = (ev)=>{
        ev.preventDefault();
        let groupName = {
        
            TeamName: document.getElementById('TeamName').value
        }

        teamNames.push(groupName);

        console.log(teamNames)
    }

    
    document.forms[0].reset(); // to clear the form for the next entries

    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('createTeam').addEventListener('click', addTeamName);
    
    });