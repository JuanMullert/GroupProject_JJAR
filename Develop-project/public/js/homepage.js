
 
// let teamNames = [];

//     let addTeamName = (ev)=>{
//         ev.preventDefault();
//         let groupName = {
//             TeamName: document.getElementById('TeamName').value
            
//         }

//         if(document.getElementById("TeamName").value.length == 0) {
//             alert("Must be filled out!")
//             return false
//         }


        

//         teamNames.push(groupName);  
//         document.forms[0].reset(); // to clear the form for the next entries

//         console.log(teamNames)
          
    
//     };

    document.addEventListener('DOMContentLoaded', ()=>{
        const team_exist = false;
        team_create = fetch("../controllers/api/interaction/team_create");
        document.getElementById('createTeam').addEventListener('click', team_create);
        
        if(team_exist = true) {
            alert("Team name is already taken!")
            return false;
        }


    
    });

    
