import { EnergyType } from '../Energy';

export default abstract class Archetypes {
  private readonly _special: number;
  private readonly _cost: number;
  constructor(
    private readonly _name: string,
  ) {
    this._name = _name;
    this._special = 0;
    this._cost = 0;
  }
  
  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  public get name(): string {
    return this._name;
  }

  abstract get energyType(): EnergyType;

  static createdArchetypeInstances(): number {
    throw new Error('Method not implemented.');
  }
}