class Ship {
    constructor(name, hitPoints, damageReceived, color, type, id) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.damageReceived = damageReceived;
        this.color = color;
        this.type = type;
        this.isDestroyed = false;
        this.id = `${this.type}-${id}`;
    }

    makeShip() {
        let ship = document.createElement('div')
        ship.style.textAlign = "center";
        ship.style.backgroundColor = this.color
        ship.id = `${this.id}`;
        ship.classList.add("ship");
        ship.innerHTML = `
            <h3>${this.name}</h3>
            <h5>${this.hitPoints} HP</h5>
        `
        let row = document.getElementsByClassName(`${this.type}`);
        row[0].appendChild(ship)
    }

    updateShip () {
        let ship = document.querySelector(`#${this.id}`);
        console.log(ship)
        ship.innerHTML = `
            <h3>${this.name}</h3>
            <h5>${this.hitPoints}HP</h5>
        `;
        ship.style.backgroundColor = this.color;
    }

    damageShip() {
        this.hitPoints -= this.damageReceived;
        if (this.hitPoints <= 0) {
            this.destroyShip()
        } else {
            this.updateShip()
        }
    }

    destroyShip() {
        this.color = "black"
        this.hitPoints = "0"
        this.isDestroyed = true
        this.updateShip()
    }
}

class MotherShip extends Ship {
    constructor(id) {
        super("Mother Ship", 100, 9, "red", "mother-ship", id)
    }
}

class DefenceShip extends Ship {
    constructor(id) {
        super("Defence Ship", 80, 10, "green", "defence-ships", id)
    }
}

class AttackShip extends Ship {
    constructor(id) {
        super("Attack Ship", 45, 12, "orange", "attack-ships", id)
    }
}

const makeMotherShip = (shipsArr) => {
    let mothership = new MotherShip(1)
    mothership.makeShip()
    shipsArr.push(mothership)
}

const makeDefenceShips = (shipsArr) => {
    for (let i = 0; i < 5; i++) {
        let defenceShip = new DefenceShip(i+1)
        defenceShip.makeShip()
        shipsArr.push(defenceShip)
    }
}

const makeAttackShips = (shipsArr) => {
    for (let i = 0; i < 8; i++) {
        let attackShip = new AttackShip(i+1)
        attackShip.makeShip()
        shipsArr.push(attackShip)
    }
}

const gameWon = (shipsArr) => {
    let allShips = document.querySelectorAll(".ship")
    for (let i = 0; i < allShips.length; i++) {
        allShips[i].remove()
    }
    let shipsArea = document.querySelector('.ships');
    let gameArea = document.querySelector('.game-over');
    shipsArea.style.display = "none";
    gameArea.style.display = "flex";
    gameArea.innerHTML = `
        <h1 class="title">Game Over - You Win!<h1>
        <button class="restart-button" id="restart">Play again!</button>
    `
    const restartButton = document.querySelector("#restart")
    restartButton.addEventListener("click", () => {
        gameArea.style.display = "none";
        shipsArea.style.display = "block";
        startGame(shipsArr);
    })
}

const startGame = (shipsArr) => {
    makeMotherShip(shipsArr)
    makeDefenceShips(shipsArr)
    makeAttackShips(shipsArr)
}

document.addEventListener('DOMContentLoaded', () => {
    let shipsArr = []

    startGame(shipsArr)

    let shoot = document.querySelector("#shoot")
    shoot.addEventListener('click', () => {
        console.log(shipsArr)
        let i = Math.floor(Math.random() * shipsArr.length)
        let randomShip = shipsArr[i]
        randomShip.damageShip()
        if (randomShip.name === "Mother Ship" && randomShip.isDestroyed) {
            shipsArr.splice(0, shipsArr.length)
        } else if (randomShip.isDestroyed) {
            shipsArr.splice(i, 1)
        }
        if (shipsArr.length === 0) {
            gameWon(shipsArr)
        }
    })
})
    