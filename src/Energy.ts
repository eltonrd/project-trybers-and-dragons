type EnergyType = 'mana' | 'stamina';
export { EnergyType };
export default interface Energy {
  type_: EnergyType,
  amount: number,
}