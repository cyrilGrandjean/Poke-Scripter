declare class BattleFrontierHighestStageRequirement extends AchievementRequirement {
  constructor(value: number, option?: GameConstants.AchievementOption);
  getProgress(): number;
  hint(): string;
}
