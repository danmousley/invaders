"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ship =
/*#__PURE__*/
function () {
  function Ship(name, hitPoints, damageReceived, color, type, id) {
    _classCallCheck(this, Ship);

    this.name = name;
    this.hitPoints = hitPoints;
    this.damageReceived = damageReceived;
    this.color = color; // this.height = "100px";
    // this.width = "100px";

    this.type = type;
    this.isDestroyed = false;
    this.id = "".concat(this.type, "-").concat(id);
  }

  _createClass(Ship, [{
    key: "makeShip",
    value: function makeShip() {
      var ship = document.createElement('div'); // ship.style.width = this.width;
      // ship.style.height = this.height;

      ship.style.textAlign = "center";
      ship.style.backgroundColor = this.color;
      ship.id = "".concat(this.id);
      ship.classList.add("ship");
      ship.innerHTML = "\n            <h3>".concat(this.name, "</h3>\n            <h5>").concat(this.hitPoints, " HP</h5>\n        ");
      var row = document.getElementsByClassName("".concat(this.type)); // console.log(row[0])

      row[0].appendChild(ship);
    }
  }, {
    key: "updateShip",
    value: function updateShip() {
      var ship = document.querySelector("#".concat(this.id));
      console.log(ship);
      ship.innerHTML = "\n            <h3>".concat(this.name, "</h3>\n            <h5>").concat(this.hitPoints, "HP</h5>\n        ");
      ship.style.backgroundColor = this.color;

      if (this.isDestroyed = true) {
        ship.classList.remove("ship");
      }
    }
  }, {
    key: "damageShip",
    value: function damageShip() {
      this.hitPoints -= this.damageReceived;

      if (this.hitPoints <= 0) {
        destroyShip();
      } else {
        this.updateShip();
      }
    }
  }, {
    key: "destroyShip",
    value: function destroyShip() {
      this.color = "black";
      this.hitPoints = "0";
      this.isDestroyed = true;
      this.updateShip();
    }
  }]);

  return Ship;
}();

var MotherShip =
/*#__PURE__*/
function (_Ship) {
  _inherits(MotherShip, _Ship);

  function MotherShip(id) {
    _classCallCheck(this, MotherShip);

    return _possibleConstructorReturn(this, _getPrototypeOf(MotherShip).call(this, "Mother Ship", 100, 9, "red", "mother-ship", id));
  }

  return MotherShip;
}(Ship);

var DefenceShip =
/*#__PURE__*/
function (_Ship2) {
  _inherits(DefenceShip, _Ship2);

  function DefenceShip(id) {
    _classCallCheck(this, DefenceShip);

    return _possibleConstructorReturn(this, _getPrototypeOf(DefenceShip).call(this, "Defence Ship", 80, 10, "green", "defence-ships", id));
  }

  return DefenceShip;
}(Ship);

var AttackShip =
/*#__PURE__*/
function (_Ship3) {
  _inherits(AttackShip, _Ship3);

  function AttackShip(id) {
    _classCallCheck(this, AttackShip);

    return _possibleConstructorReturn(this, _getPrototypeOf(AttackShip).call(this, "Attack Ship", 45, 12, "orange", "attack-ships", id));
  }

  return AttackShip;
}(Ship);

var makeMotherShip = function makeMotherShip(shipsArr) {
  var mothership = new MotherShip(1);
  mothership.makeShip();
  shipsArr.push(mothership);
};

var makeDefenceShips = function makeDefenceShips(shipsArr) {
  for (var i = 0; i < 5; i++) {
    var defenceShip = new DefenceShip(i + 1);
    defenceShip.makeShip();
    shipsArr.push(defenceShip);
  }
};

var makeAttackShips = function makeAttackShips(shipsArr) {
  for (var i = 0; i < 8; i++) {
    var attackShip = new AttackShip(i + 1);
    attackShip.makeShip();
    shipsArr.push(attackShip);
  }
};

document.addEventListener('DOMContentLoaded', function () {
  shipsArr = [];
  makeMotherShip(shipsArr);
  makeDefenceShips(shipsArr);
  makeAttackShips(shipsArr);
  console.log(shipsArr);
  var shoot = document.querySelector("#shoot");
  shoot.addEventListener('click', function () {
    // let objArr = document.querySelectorAll('.ship')
    // console.log(objArr)
    var i = Math.floor(Math.random() * shipsArr.length);
    console.log(shipsArr[i].id); // objArr[i].
  }); // mothership = new MotherShip(1)
  // defenceship1 = new DefenceShip(1)
  // attackship1 = new AttackShip(1)
  // attackship1.makeShip()
  // mothership.makeShip()
  // defenceship1.makeShip()
  // mothership.damageShip()
  // defenceship1.damageShip()
  // console.log(mothership)
});