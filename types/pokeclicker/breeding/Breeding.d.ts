import Currency = GameConstants.Currency;
declare class Breeding implements Feature {
  private multiplier;
  name: string;
  saveKey: string;
  defaults: {
    eggList: KnockoutObservable<Egg>[];
    eggSlots: number;
    queueList: any[];
    queueSlots: number;
  };
  hatcheryHelpers: HatcheryHelpers;
  private _eggList;
  private _eggSlots;
  private queueList;
  private queueSlots;
  hatchList: {
    [name: number]: PokemonNameType[][];
  };
  constructor(multiplier: Multiplier);
  initialize(): void;
  update(delta: number): void;
  canAccess(): boolean;
  fromJSON(json: Record<string, any>): void;
  toJSON(): Record<string, any>;
  canBreedPokemon(): boolean;
  hasFreeEggSlot(): boolean;
  hasFreeQueueSlot(): boolean;
  gainEgg(e: Egg): boolean;
  gainRandomEgg(): boolean;
  progressEggsBattle(route: number, region: GameConstants.Region): void;
  progressEggs(amount: number): void;
  private getStepMultiplier;
  addPokemonToHatchery(pokemon: PartyPokemon): boolean;
  addToQueue(pokemon: PartyPokemon): boolean;
  removeFromQueue(index: number): boolean;
  gainPokemonEgg(pokemon: PartyPokemon | PokemonListData): boolean;
  hatchPokemonEgg(index: number): void;
  moveEggs(): void;
  createEgg(pokemonName: PokemonNameType, type?: EggType): Egg;
  createTypedEgg(type: EggType): Egg;
  createRandomEgg(): Egg;
  createFossilEgg(fossil: string): Egg;
  getSteps(eggCycles: number): number;
  calculateBaseForm(pokemonName: PokemonNameType): PokemonNameType;
  getEggSlotCost(slot: number): number;
  buyEggSlot(): void;
  nextEggSlotCost(): Amount;
  get eggSlots(): number;
  set eggSlots(value: number);
  gainEggSlot(): void;
  gainQueueSlot(amt?: number): void;
  queueSlotsGainedFromRegion(region: GameConstants.Region): number;
  get eggList(): Array<KnockoutObservable<Egg>>;
  set eggList(value: Array<KnockoutObservable<Egg>>);
  getAllCaughtStatus(): CaughtStatus;
  getTypeCaughtStatus(type: EggType): CaughtStatus;
  checkCloseModal(): void;
}