declare class ClearDungeonRequirement extends AchievementRequirement {
  dungeonIndex: number;
  constructor(value: number, dungeonIndex: number, option?: GameConstants.AchievementOption);
  getProgress(): number;
  hint(): string;
}
