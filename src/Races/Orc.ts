import Race from './Race';

export default class Orc extends Race {
  private static _instanceNumber = 0;
  private _maxLifePoints: number;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Orc._instanceNumber += 1;
    return Orc._instanceNumber;
  }
}