// import PokemonBaseStats from "./PokemonBaseStats";

import { Nature } from "../SelectNatureDialog";
import { SubSkillList } from "../SubSkillList";
import { CollectingIngredient } from "./Ingredient";
import { MainSkillName } from "./MainSkill";
import { PokemonType, ExpertOf, PokemonBaseStats } from "./PokemonBaseStats";

export class PokemonInBox implements PokemonBaseStats {
  /**図鑑番号 */
  Id!: number;
  /**ポケモン種族名称 */
  Name!: string;
  /**タイプ */
  Type!: PokemonType;
  /**とくい */
  ExpertOf!: ExpertOf;
  /**スキル */
  Skill!: MainSkillName;

  /**進化先ポケモンがあるか？ */
  HasEvolution!: boolean;

  /**基準お手伝い時間 */
  Frequency!: number;
  /**食材確率 */
  IngredientRatio!: number;
  /**スキル確率 */
  SkillRatio!: number;
  /**最大所持数 */
  CarryLimit!: number;

  /**もってくる食材と個数 A */
  Ingredients1!: Array<CollectingIngredient>;
  /**もってくる食材と個数 B */
  Ingredients2!: Array<CollectingIngredient>;
  /**もってくる食材と個数 C */
  Ingredients3!: Array<CollectingIngredient>;

  /**もってくる食材と個数 A */
  ActualIngredients1?: CollectingIngredient;
  /**もってくる食材と個数 B */
  ActualIngredients2?: CollectingIngredient;
  /**もってくる食材と個数 C */
  ActualIngredients3?: CollectingIngredient;

  /**メインスキルレベル */
  MainSkillLevel?: number;
  /**サブスキル */
  SubSkillList?: SubSkillList;
  /**せいかく */
  Nature?: Nature;

  /**実際の食材確率 */
  ActualIngredientRatio?: number;
  /**実際のスキル確率 */
  ActualSkillRatio?: number;
}
