export default abstract class Race {
  constructor(
    private readonly _name: string,
    private readonly _dexterity: number,
  ) {
    this._name = _name;
    this._dexterity = _dexterity;
  }
  
  get name(): string {
    return this._name;
  }
  
  get dexterity(): number {
    return this._dexterity;
  }
  
  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}