import SubSkillJson from "./SubSkill.json";
// サブスキル
export class SubSkill {
  // ソート用番号
  Id: number;
  // サブスキル名称
  Name: string;
  // 効果量(SML)
  Size: EffectSize;
  // スキル色(金青白)
  Color: SubSkillColor;
  // 効果対象(自他)
  EffectTarget: EffectTarget;
  // スキルグループ(thisを含む、効果量の違う同種スキルのIDリスト)
  Group?: Array<number>;
  // 付与レベル(10,25,50,75,100)
  // Level?: number | undefined;

  constructor(
    Id: number,
    Name: string,
    Size: EffectSize,
    Color: SubSkillColor,
    Type: EffectTarget
    // Level: number | undefined
  ) {
    this.Id = Id;
    this.Name = Name;
    this.Size = Size;
    this.Color = Color;
    this.EffectTarget = Type;
    // this.Level = Level;
  }

  /**
   * name
   */
  get FullName(): string {
    if (this.Size === EffectSize.None) {
      return this.Name;
    } else {
      return `${this.Name} ${this.Size}`;
    }
  }
}

// スキルの効果量
export const EffectSize = {
  None: "None",
  S: "S",
  M: "M",
  L: "L",
};
export type EffectSize = (typeof EffectSize)[keyof typeof EffectSize];

// スキルの対象
export const EffectTarget = {
  Self: "Self",
  Team: "Team",
};
export type EffectTarget = (typeof EffectTarget)[keyof typeof EffectTarget];

// スキルの色
export enum SubSkillColor {
  Gold,
  Blue,
  White,
}

// JSONファイルから読み込んだJSONオブジェクトを、一度String型に変換
const AllSubSkillListString = JSON.stringify(SubSkillJson);
// Stringをobjリストに変換
const AllSubSkillList_: Array<SubSkill> = JSON.parse(AllSubSkillListString);

// JSON.parseだとメソッドが初期化されないため定義しなおす
export const AllSubSkillList: Array<SubSkill> = new Array<SubSkill>();
AllSubSkillList_.map((from) => {
  const to: SubSkill = new SubSkill(from.Id, from.Name, from.Size, from.Color, from.EffectTarget);
  AllSubSkillList.push(to);
});

// スキル名をキーとして、同名スキルをまとめる
export const GroupedSubSkillListMap: Map<string, Array<SubSkill>> = new Map<string, Array<SubSkill>>();
// 全スキルを回す
AllSubSkillList.map((skill) => {
  // Mapの状態によって分岐
  if (GroupedSubSkillListMap.has(skill.Name)) {
    // 既に同名スキルがMapに存在する場合、スキルを配列にPush
    GroupedSubSkillListMap.get(skill.Name)?.push(skill);
  } else {
    // 同名スキルがMapにセットされていない場合、キーとスキル配列を作成
    GroupedSubSkillListMap.set(skill.Name, [skill]);
  }
});

// ソート
AllSubSkillList_.sort((a, b) => a.Id - b.Id);
