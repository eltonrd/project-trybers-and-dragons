import Archetypes from './Archetypes';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetypes {
  private static _instanceNumber = 0;
  private readonly _energyType: EnergyType;
  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    Warrior._instanceNumber += 1;
    return Warrior._instanceNumber;
  }
}