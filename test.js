// Starting our game engine! XD
var assert = require('assert');

var Character = function (hp) {
  this.hp = hp;
}
Character.prototype.alive = function () {
  if (this.hp === 0) {
    return false;
  } else {
    return true;
  }
}
Character.prototype.hit = function (dmg) {
  if (dmg > this.hp) {
    this.hp = 0;
  } else {
    this.hp -= dmg;
  }
}

describe("Game Engine", function () {
  describe("Character", function () {
    describe("#alive()", function () {
      it("Should be alive if its HP are greater than zero", function () {
        character = new Character(1);
        assert(character.alive());
      });
      it("Should not be alive if its HP are equal to zero", function () {
        character = new Character(0);
        assert(!character.alive());
      });
    });
    describe("#hit(dmg)", function () {
      it("Should not be alive if it gets hit by equals its HP", function () {
        character = new Character(1);
        character.hit(1);
        assert(!character.alive());
      });
      it("Should be alive if it gets hit by less than its HP", function () {
        character = new Character(2);
        character.hit(1);
        assert(character.alive());
      });
      it("Should not be alive if it gets hit by more than its HP", function () {
        character = new Character(1);
        character.hit(2);
        assert(!character.alive());
      });
    });
  });
});
