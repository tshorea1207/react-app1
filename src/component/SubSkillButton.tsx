import { ButtonBase, ToggleButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";
import { EffectSize, SubSkill } from "../data/SubSkill";
import { styled } from "@mui/system";
import ToggleButton from "@mui/material/ToggleButton";
import React from "react";
import { colors } from "@mui/material";
import { SubSkillList } from "../SubSkillList";

// サブスキル選択ダイアログ内のボタンを定義する
// スキル名、効果量ボタンを含めた1行を表現する

// サブスキルボタンスタイル
const StyledSubSkillButton = styled(ToggleButton)(({ theme }) => {
  const buttonTheme = (
    theme.typography as {
      button: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        lineHeight: number;
      };
    }
  ).button;
  return {
    // fontFamily: buttonTheme.fontFamily,
    // fontWeight: buttonTheme.fontWeight,
    // letterSpacing: buttonTheme.letterSpacing,
    // lineHeight: buttonTheme.lineHeight,
    // border: "1px solid #000000",
    // borderColor: colors.amber[800],
    border: "2px solid transparent",
    // borderColor: colors.amber[800],
    margin: "2px",
    fontSize: "1rem",
    color: "#000000",
    height: "2.0rem",
    width: "12em",
    padding: ".2rem",
    borderRadius: ".4rem",
    background: theme.palette.primary.SubSkillWhite,
    "&:hover": { opacity: "0.9" },
    "&.Gold": { background: theme.palette.primary.SubSkillGold },
    "&.Blue": { background: theme.palette.primary.SubSkillWhite },
    "&.White": { background: theme.palette.primary.SubSkillWhite },
    "&.Self": {
      background: "transparent",
      color: theme.palette.text.primary,
    },
    "&.Mui-selected": {
      color: theme.palette.primary.main,
      background: "transparent",
      borderColor: theme.palette.primary.main,
      "&:hover": {
        background: "transparent",
      },
    },
  };
});

// サブスキル効果量ボタンスタイル
const StyledSubSkillSizeButton = styled(StyledSubSkillButton)(({ theme }) => {
  return {
    width: "3em",
    "&.Gold": { background: theme.palette.primary.SubSkillGold },
    "&.Blue": { background: theme.palette.primary.SubSkillBlue },
    "&.White": { background: theme.palette.primary.SubSkillWhite },
    "&:selected": { background: "#888c8f" },
    "&:hover": { opacity: "0.9" },
    "&.Mui-selected": {
      color: theme.palette.primary.main,
      background: "transparent",
      borderColor: theme.palette.primary.main,
      "&:hover": {
        background: "transparent",
      },
    },
  };
});

// サブスキルボタン プロパティ
interface SubSkillProps {
  // 生成する対象のサブスキル
  subSkills: SubSkill[];
  // 親画面で選択中のサブスキル
  selectedSubSkillList: SubSkillList;
  // サブスキルを追加するコールバック。対象は親画面の選択中サブスキルリスト
  add: (value: SubSkill) => void;
  // サブスキルを削除するコールバック。対象は親画面の選択中サブスキルリスト
  remove: (value: SubSkill) => void;
}
// サブスキルボタン
export const SubSkillButtons: React.FC<SubSkillProps> = ({ subSkills, selectedSubSkillList, add, remove }) => {
  // State定義
  const [selectedSubSkills, setSelectedSubSkills] = React.useState<Array<SubSkill | undefined>>(
    selectedSubSkillList.ToList()
  );
  // 選択サブスキルに要素を追加
  const addSelectedSubSkill = (skill: SubSkill) => {
    setSelectedSubSkills([...selectedSubSkills, skill]);
  };
  // 選択サブスキルから要素を削除
  const removeSelectedSubSkill = (skill: SubSkill) => {
    setSelectedSubSkills(selectedSubSkills.filter((s) => s !== skill));
  };

  // ボタンクリックイベントハンドラ
  const handleButtonClick = (skill: SubSkill) => {
    // クリックしたスキルが選択中の場合は削除
    // 選択中でない(選択中サブスキルリストに入っていない)場合は追加
    if (selectedSubSkills.includes(skill)) {
      removeSelectedSubSkill(skill);
      remove(skill);
    } else {
      addSelectedSubSkill(skill);
      add(skill);
    }
  };

  // 翻訳モジュール
  const { t } = useTranslation();

  // ボタン返却
  return (
    <div>
      {/* スキル名を表示 */}
      <StyledSubSkillButton
        value={subSkills[0].Id}
        className={`${subSkills[0].Color.toString()} ${subSkills[0].EffectTarget.toString()}`}
        selected={subSkills[0].Size === EffectSize.None ? selectedSubSkills.includes(subSkills[0]) : false}
        onClick={() => handleButtonClick(subSkills[0])}
      >
        {t(`SubSkills.${subSkills[0]?.Name}`)}
      </StyledSubSkillButton>
      {subSkills.map(
        (skill) =>
          // スキル効果量が存在する場合、効果量ボタンを設置
          skill.Size !== EffectSize.None ? (
            <StyledSubSkillSizeButton
              value={skill.Id}
              className={skill.Color.toString()}
              selected={selectedSubSkills.includes(skill)}
              onClick={() => handleButtonClick(skill)}
            >
              {skill.Size}
            </StyledSubSkillSizeButton>
          ) : null // スキル効果量がNoneの場合は効果量ボタンを表示しない
      )}
    </div>
  );
};
