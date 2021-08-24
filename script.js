class Ship {
    constructor(name, hitPoints, damageReceived, color, type, id) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.damageReceived = damageReceived;
        this.color = color;
        // this.height = "100px";
        // this.width = "100px";
        this.type = type;
        this.isDestroyed = false;
        this.id = `${this.type}-${id}`;
    }

    makeShip() {
        let ship = document.createElement('div')
        // ship.style.width = this.width;
        // ship.style.height = this.height;
        ship.style.textAlign = "center";
        ship.style.backgroundColor = this.color
        ship.id = `${this.id}`;
        ship.classList.add("ship");
        ship.innerHTML = `
            <h3>${this.name}</h3>
            <h5>${this.hitPoints} HP</h5>
        `
        let row = document.getElementsByClassName(`${this.type}`);
        // console.log(row[0])
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
        if (this.isDestroyed = true) {
            ship.classList.remove("ship");
        }
    }

    damageShip() {
        this.hitPoints -= this.damageReceived;
        if (this.hitPoints <= 0) {
            destroyShip()
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

document.addEventListener('DOMContentLoaded', () => {
    shipsArr = []

    makeMotherShip(shipsArr)
    makeDefenceShips(shipsArr)
    makeAttackShips(shipsArr)
    console.log(shipsArr)

    let shoot = document.querySelector("#shoot")
    shoot.addEventListener('click', () => {
        // let objArr = document.querySelectorAll('.ship')
        // console.log(objArr)
        let i = Math.floor(Math.random() * shipsArr.length)
        console.log(shipsArr[i].id)
        // objArr[i].
        
    })
    

    // mothership = new MotherShip(1)
    // defenceship1 = new DefenceShip(1)
    // attackship1 = new AttackShip(1)
    // attackship1.makeShip()
    // mothership.makeShip()
    // defenceship1.makeShip()
    // mothership.damageShip()
    // defenceship1.damageShip()
    // console.log(mothership)
})
    