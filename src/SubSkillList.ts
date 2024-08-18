import { SubSkill } from "./data/SubSkill";

// 1体のポケモンが持つサブスキル一覧
export class SubSkillList {
  lv10?: SubSkill;
  lv25?: SubSkill;
  lv50?: SubSkill;
  lv75?: SubSkill;
  lv100?: SubSkill;

  constructor(subSkills: Array<SubSkill>) {
    this.lv10 = subSkills[0];
    this.lv25 = subSkills[1];
    this.lv50 = subSkills[2];
    this.lv75 = subSkills[3];
    this.lv100 = subSkills[4];
  }

  IsContain(subSkill: SubSkill) {
    let isContain =
      this.lv10?.Id === subSkill.Id ||
      this.lv25?.Id === subSkill.Id ||
      this.lv50?.Id === subSkill.Id ||
      this.lv75?.Id === subSkill.Id ||
      this.lv100?.Id === subSkill.Id;
    return isContain;
  }

  ToList(): Array<SubSkill | undefined> {
    let list: Array<SubSkill | undefined> = [this.lv10, this.lv25, this.lv50, this.lv75, this.lv100];
    return list;
  }
}
