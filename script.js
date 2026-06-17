let kills = 0;
let wins = 0;

function joinGame(){
    alert("🔥 Welcome to BGMI Battle Zone 🔥");
}

setInterval(()=>{
    kills += Math.floor(Math.random()*3);
    wins += Math.floor(Math.random()*2);

    document.getElementById("kills").innerText = kills;
    document.getElementById("wins").innerText = wins;


},2000);

function playSound(){
    document.getElementById("bgmiSound").play();
}
function getRank(points){

    if(points >= 4200)
        return "👑 Conqueror";

    if(points >= 3700)
        return "🔥 Ace";

    if(points >= 3200)
        return "🏆 Crown";

    if(points >= 2600)
        return "💎 Diamond";

    return "⭐ Platinum";
}

let points = 4500;

document.getElementById("rank")
.innerHTML = getRank(points);