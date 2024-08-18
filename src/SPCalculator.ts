import { CollectingIngredient } from "./data/Ingredient";

export class SPCalculator {
  /**きのみSP*/
  BerrySp?: number;
  /**食材SP */
  IngredientSp?: number;
  /**スキルSP */
  SkillSp?: number;

  /**ポケモンレベル */
  PokemonLevel?: number;

  /**1時間平均お手伝い回数 */
  FrequencyBy1h?: number;
  /**お手伝い時間(基礎) */
  BaseFrequency?: number;
  /**お手伝い時間(基礎) */
  ActualFrequency?: number;
  /**お手伝い時間：補正倍率：せいかく */
  FrequencyEffectByNature?: number;
  /**お手伝い時間：補正倍率：サブスキル */
  FrequencyEffectBySubSkill?: number;

  /**食材確率(基礎) */
  BaseIngredientRatio?: number;
  /**食材確率(補正) */
  ActualIngredientRatio?: number;
  /**食材確率：補正倍率：せいかく */
  IngredientEffectByNature?: number;
  /**食材確率：補正倍率：サブスキル */
  IngredientEffectBySubSkill?: number;
  /**食材：解放済みの数(1,2,3) */
  IngredientAnlocked?: number;
  /**集める食材3つ 食材基礎エナジー、食材の数を使用する */
  CollectingIngredients?: Array<CollectingIngredient>;
  /**食材成長補正 */
  IngredientGrowth?: number;

  /**きのみ確率(補正) */
  ActualBerryRatio?: number;
  /**XXXXXXXXXXXX */
  //   XXXXXXXXXXXX?: number;
}
