import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(name: string) {
    this._race = new Elf(name, 10);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = { 
      type_: this._archetype.energyType, amount: getRandomInt(1, 10), 
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { type_: this._archetype.energyType, amount: this._energy.amount };
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
      console.log(`You received ${damage} damage. 
      You have ${this._lifePoints} life points left. `);
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
      console.log(`You are dead. Overkill damage is ${damage}. RIP.`);
    }
    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    const enemyDamage = this._strength;
    console.log(`You attacked for ${enemyDamage} damage.`);
    return enemy.receiveDamage(enemyDamage);
  }

  public levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  public special(enemy: Fighter): void {
    const unlimitedPower = 999;
    const ultimateDamage = (this._strength + this._dexterity) * unlimitedPower;
    const energy = this._energy.amount;
    if (energy === 10) {
      console.log(`You used special attack for ${ultimateDamage} damage.`);
      enemy.receiveDamage(ultimateDamage);
      this._energy.amount -= 10;
    } else {
      console.log('You don\'t have enough energy to use special attack.');
    }
  }
}