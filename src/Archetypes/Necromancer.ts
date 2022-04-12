import Archetypes from './Archetypes';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetypes {
  private static _instanceNumber = 0;
  private readonly _energyType: EnergyType;
  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    Necromancer._instanceNumber += 1;
    return Necromancer._instanceNumber;
  }
}