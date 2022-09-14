var gk = "manuel neuer";
var fieldPlayers1 = ["players11","players12","players13","players14","players15","players16","players17","players18","players19","players110"];
var players1 = [gk,fieldPlayers1];

var gk2 = "David de gea";
var fieldPlayers2 = [gk2,"players21","players22","players23","players24","players25","players26","players27","players28","players29","players210"];
var players2 = [gk2,fieldPlayers2];

var allPlayers = [players1,players2];

var players1Final = [gk,"players12","players13","players14","players15","players16","players17","players18","players19","players110","Thiago","Coutinho","Perisic"];

var team1 = 0;
var team2 = 0;
var draw;


function printGoals(...arguments){
    // console.log(arguments,`Number of goals:${arguments.length}`);
    let sum = 0;
   for(let i=0;i<arguments.length;i++){
       console.log(arguments[i]);
       sum+=1;
   }
    switch(true){
        case(team1 == 0):
            team1 = sum;
            break;
        default:
            team2 = sum;    
    }
    return(`Number of goals:${sum}`);
}


function checkWinner(){
    switch(true){
        case(team1 > team2):
            return `Team 2 is more likely to win`;
        case(team1 < team2):
            return `Team 1  is more likely to win`;
        default:
            return "its draw"    
    }
}


var team1Scorers = printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
console.log(team1Scorers, "\n");


var team2Scorers = printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich',"Rooney");
console.log(team2Scorers, "\n");

var winner =checkWinner();
console.log(winner);
