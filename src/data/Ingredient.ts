/**ポケモンがあつめる食材 */
export type CollectingIngredient = {
  /**集める食材 */
  Ingredient: IngredientType;
  /**個数 */
  Amount: number;
  /**食材の並び位置 */
  Order: IngredientOrder;
};

/**食材並び順 */
export enum IngredientOrder {
  A,
  B,
  C,
}

/**食材 */
export enum IngredientType {
  //不明
  Unknown,
  //ふといながねぎ
  Leek,
  //あじわいキノコ
  Mushroom,
  //とくせんエッグ
  Egg,
  //ほっこりポテト
  Potato,
  //とくせんリンゴ
  Apple,
  //げきからハーブ
  Herb,
  //マメミート
  Sausage,
  //モーモーミルク
  Milk,
  //あまいミツ
  Honey,
  //ピュアなオイル
  Oil,
  //あったかジンジャー
  Ginger,
  //あんみんトマト
  Tomato,
  //リラックスカカオ
  Cacao,
  //ヤドンのしっぽ
  Tail,
  //ワカクサ大豆
  Soy,
  //ワカクサコーン
  Corn,
}
