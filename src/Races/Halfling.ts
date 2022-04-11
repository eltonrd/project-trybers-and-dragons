import Race from './Race';

export default class Halfling extends Race {
  private static _instanceNumber = 0;
  private _maxLifePoints: number;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Halfling._instanceNumber += 1;
    return Halfling._instanceNumber;
  }
}