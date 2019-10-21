// Gioco dei dadi, chi fa di più vince;

// players are asked their name
var player1Name = prompt("Player1, insert your name");
var player2Name = prompt("Player2, insert your name");

// the dice are rolled
var player1Result = Math.floor(Math.random() * 6) + 1;
var player2Result = Math.floor(Math.random() * 6) + 1;

// players are showned their result
document.getElementsByClassName("player1-result-msg")[0].textContent = player1Name + ", the " +
                                                                       "result of your dice roll " +
                                                                       "is " + player1Result;
document.getElementsByClassName("player2-result-msg")[0].textContent = player2Name + ", the " +
                                                                       "result of your dice roll " +
                                                                       "is " + player2Result;
// players are showned who is the winner
var whoWinsMsg = "Nobody wins!";
if (player1Result > player2Result) whoWinsMsg = player1Name + " wins!";
else if (player1Result < player2Result) whoWinsMsg = player2Name + " wins!";
document.getElementsByClassName("who-wins-msg")[0].textContent = whoWinsMsg;