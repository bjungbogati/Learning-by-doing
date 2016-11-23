
    var userChoice = prompt("Do you choose Manchester United, Chelsea or Real Madrid?");



var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "Manchester United";
} else if(computerChoice <= 0.67) {
	computerChoice = "Chelsea";
} else {
	computerChoice = "Real Madrid";
} console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
    if(choice1 === choice2){
        return "The result is a tie!";
        }
    else if (choice1 === "Manchester United"){
        if (choice2 === "Real Madrid"){
            return "Manchester United wins";}
            
            else {
            return "Chelsea wins";    
                }
        }
        
    else if (choice1 === "Chelsea"){
        if(choice2 === "Manchester United"){
            return "Chelsea wins";
            }
        else {
            return "Real Madrid wins";
            }
        }
        
    else if (choice1 === "Real Madrid"){
        if(choice2 ==="Manchester United"){
            return "Manchester United wins";
            }
        else {
            choice2 === "Chelsea";
            }
        }
    };
    
compare(userChoice, computerChoice);
    