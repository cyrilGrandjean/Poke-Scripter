import {Action} from "../base";

export class AutoBreed extends Action {
  observableEggSlots: KnockoutSubscription[];
  observableEggSteps: KnockoutSubscription[];

  constructor() {
    super();
    this.observableEggSlots = [];
    this.observableEggSteps = [];
  }
  start(): void {
    App.game.breeding.eggList.forEach((egg, idx) => {
      this.observableEggSlots.push(
          egg.subscribe((data) => {
            if (!data.isNone()) {
              this.observableEggSteps[idx]?.dispose();
              this.observableEggSteps[idx] = this.subscribeStep(data, idx);
            }
          })
      )
    });
    if (App.game.breeding.hasFreeEggSlot()) {
      this.addPokemonToHatchery();
    }
  }

  stop(): void {
    this.observableEggSlots.forEach((obs) => obs.dispose());
    this.observableEggSteps.forEach((obs) => obs.dispose());
  }

  private subscribeStep(data, ind): KnockoutSubscription {
    return data.steps.subscribe((step) => {
      if (step >= data.totalSteps) {
        App.game.breeding.hatchPokemonEgg(ind);
        this.addPokemonToHatchery();
      }
    });
  }

  private getPokemons(): PartyPokemon[] {
    const region = App.game.challenges.list.regionalAttackDebuff.active() ? BreedingController.regionalAttackDebuff() : -1;
    const partyPokemonList = [...App.game.party.caughtPokemon].sort(
        PartyController.compareBy(Settings.getSetting('hatcherySort').observableValue(),
            Settings.getSetting('hatcherySortDirection').observableValue(),
            region)
    );
    return partyPokemonList.filter((pp) => BreedingController.visible(pp)());
  }

  addPokemonToHatchery() {
    let pokemons: PartyPokemon[];
    while (App.game.breeding.hasFreeEggSlot() && (pokemons = this.getPokemons()).length > 0)
      App.game.breeding.addPokemonToHatchery(pokemons[0]);
  }

}

export const autobreed = new AutoBreed();
