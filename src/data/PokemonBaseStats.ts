import { CollectingIngredient } from "./Ingredient";
import { MainSkillName } from "./MainSkill";
import PokemonListJson from "./PokemonBaseStats.json";

/**ポケモン種族値 */
export interface PokemonBaseStats {
  /**図鑑番号 */
  Id: number;
  /**ポケモン種族名称 */
  Name: string;
  /**タイプ */
  Type: PokemonType;
  /**とくい */
  ExpertOf: ExpertOf;
  /**スキル */
  Skill: MainSkillName;

  /**進化先ポケモンがあるか？ */
  HasEvolution: boolean;

  /**基準お手伝い時間 */
  Frequency: number;
  /**食材確率 */
  IngredientRatio: number;
  /**スキル確率 */
  SkillRatio: number;
  /**最大所持数 */
  CarryLimit: number;

  /**もってくる食材と個数 A */
  Ingredients1: Array<CollectingIngredient>;
  /**もってくる食材と個数 B */
  Ingredients2: Array<CollectingIngredient>;
  /**もってくる食材と個数 C */
  Ingredients3: Array<CollectingIngredient>;
}

/**とくい */
export enum ExpertOf {
  Berry,
  Ingredient,
  Skill,
}

/**ポケモンタイプ */
export type PokemonType =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

type PokemonBaseStatsJson = {
  // JSONを定義
  Id: string;
  Name: string;
  SleepType: string;
  Type: string;
  ExpertOf: string;
  Skill: string;
  Fp: string;
  Frequency: string;
  IngredientRatio: string;
  SkillRatio: string;
  Ancestor: string;
  EvolutionCount: string;
  EvolutionLeft: string;
  HasEvolution: string;
  CarryLimit: string;
  Ing1: Array<string>;
  Ing2: Array<string>;
  Ing3: Array<string>;
};

// JSONを定義;
const json = {
  Id: 1,
  Name: "Bulbasaur",
  SleepType: "dozing",
  Type: "grass",
  ExpertOf: "Ingredients",
  Skill: "Ingredient Magnet S",
  Fp: 5,
  Frequency: 4400,
  IngredientRatio: 25.7,
  SkillRatio: 1.9,
  Ancestor: 1,
  EvolutionCount: 0,
  EvolutionLeft: 2,
  HasEvolution: false,
  CarryLimit: 11,
  IngredientsA: [{ Ingredient: "honey", Amount: 2, Order: "A" }],
  IngredientsB: [
    { Ingredient: "honey", Amount: 5, Order: "A" },
    { Ingredient: "tomato", Amount: 4, Order: "B" },
  ],
  IngredientsC: [
    { Ingredient: "honey", Amount: 7, Order: "A" },
    { Ingredient: "tomato", Amount: 7, Order: "B" },
    { Ingredient: "potato", Amount: 6, Order: "C" },
  ],
};

// 一度JSON形式へ変換
// const convert_json = JSON.stringify(json);
// 変換したものを読み込む
// const testPokemon: PokemonBaseStats = JSON.parse(convert_json);

// JSONファイルから読み込んだJSONオブジェクトを、一度String型に変換
const AllPokemonListString = JSON.stringify(PokemonListJson);
// Stringをポケモン種族値リストに変換
export const AllPokemonList_: Array<PokemonBaseStats> = JSON.parse(AllPokemonListString);
// ポケモンIDでソート
export const AllPokemonList = AllPokemonList_.sort((a, b) => a.Id - b.Id);

export default AllPokemonList_[0];
