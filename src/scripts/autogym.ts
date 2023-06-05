import { IntervalAction } from "../base";

export class AutoGym extends IntervalAction {
  index: number = 0;
  constructor() {
    super();
  }

  loop() {
    if (App?.game?.gameState != GameConstants.GameState.town) return;

    if (player.town() instanceof DungeonTown) {
      DungeonRunner.initializeDungeon(player.town().dungeon);
    } else {
      player.town().content[this.index].protectedOnclick();
    }
  }
}

export const autogym = new AutoGym();
