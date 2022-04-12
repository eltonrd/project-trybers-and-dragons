import Archetypes from './Archetypes';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetypes {
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
    Ranger._instanceNumber += 1;
    return Ranger._instanceNumber;
  }
}