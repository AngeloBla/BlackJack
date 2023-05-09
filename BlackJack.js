var spieler = [];
var bank = [];
const Bube = 10;
const Dame = 10;
const König = 10;
const Ass = 11;
const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, Bube, Dame, König, Ass];

function karten_austeilen() {
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    spieler.push(deck[randomIndex]);
    deck.splice(randomIndex, 1); 
  }
  
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    bank.push(deck[randomIndex]);
    deck.splice(randomIndex, 1); 
  }
}
  
karten_austeilen();
console.log("Der Spieler hat: "+spieler); 
console.log("Die Bank hat: "+bank); 
console.log("Möchten Sie eine weitere Karte ziehen?");

function karte_ziehen() {
  for (let i = 0; i < 1; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    spieler.push(deck[randomIndex]);
    deck.splice(randomIndex, 1); 
  }
}

karte_ziehen();
console.log("Der Spieler hat: "+spieler);
pruefe_spielstand();

function pruefe_spielstand() {
  let summeSpieler = 0;
  for (let i = 0; i < spieler.length; i++) {
    summeSpieler += spieler[i];
  }
  if (summeSpieler > 21) {
    console.log("Sie haben verloren. Ihre Karten haben einen Wert von " + summeSpieler);
  }
  else if (summeSpieler === 21) {
    console.log("Sie haben GEWONNEN! Ihre Karten haben einen Wert von " + summeSpieler);
  }
  else if (summeSpieler < 21) {
    console.log("Möchten Sie eine weitere Karte ziehen?");
    karte_ziehen();
  }
}
