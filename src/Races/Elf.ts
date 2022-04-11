import Race from './Race';

export default class Elf extends Race {
  private static _instanceNumber = 0;
  private _maxLifePoints: number;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Elf._instanceNumber += 1;
    return Elf._instanceNumber;
  }
}