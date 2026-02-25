const canvas = document.getElementById("Spelfönster");
const ctx = canvas.getContext("2d");

// default är blå färg 
const playerImage = new Image();
playerImage.src = 'player/blue_player.png';

//ändra färg beroende på vilken färg man har valt
function playercolor(color) {
    playerImage.src = `player/${color}_player.png`;
    // Uppdaterar bildens referens istället för att skapa ett nytt Image-objekt varje gång.
    if (typeof player !== 'undefined' && player && player.img) {
        player.img = playerImage;
    }
}
