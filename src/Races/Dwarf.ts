import Race from './Race';

export default class Dwarf extends Race {
  private static _instanceNumber = 0;
  private _maxLifePoints: number;
  constructor(
    name: string, 
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Dwarf._instanceNumber += 1;
    return Dwarf._instanceNumber;
  }
}
