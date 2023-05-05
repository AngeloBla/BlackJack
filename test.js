function hallo(name){
    return name;
}
console.log(hallo("Ango"));


SchereSteinPapier

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Schere Stein Papier</title>
<style>
    body {
        text-align: center;
        background-color: antiquewhite;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    button {
        font-size: 20px;
        margin: 50px;
        padding: 50px;
    }
    #Stein {
        background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rock-paper-scissors_%28rock%29.png/120px-Rock-paper-scissors_%28rock%29.png');
        background-size: contain;
    }
    #Papier {
        background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/120px-Rock-paper-scissors_%28paper%29.png');
        background-size: contain;
    }
    #Schere {
        background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/120px-Rock-paper-scissors_%28scissors%29.png');
        background-size: contain;
    }
</style>
</head>
<body>
    <h1>Schere Stein Papier</h1>
    <p>Wähle dein Symbol:</p>
    <button id="Stein"></button>
    <button id="Papier"></button>
    <button id="Schere"></button>
    <p id="result"></p>

    <script>
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const playerSelection = button.id;
                const computerSelection = computerPlay();
                const result = playRound(playerSelection, computerSelection);
                document.getElementById('result').innerHTML = result + ` <br> Du hast ${playerSelection} gewählt und der Computer hat ${computerSelection} gewählt.`;
            });
        });

        function computerPlay() {
            const symbols = ['Stein', 'Papier', 'Schere'];
            const randomIndex = Math.floor(Math.random() * symbols.length);
            return symbols[randomIndex];
        }

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return 'Unentschieden!';
            } else if (
                (playerSelection === 'Stein' && computerSelection === 'Schere') ||
                (playerSelection === 'Papier' && computerSelection === 'Stein') ||
                (playerSelection === 'Schere' && computerSelection === 'Papier')
            ) {
                return `Du hast gewonnen! ${playerSelection} schlägt ${computerSelection}.`;
            } else {
                return `Du hast verloren! ${computerSelection} schlägt ${playerSelection}.`;
            }
        }
    </script>
</body>
</html>




