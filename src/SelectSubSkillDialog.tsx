import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import "./i18n/config";
import { SubSkill, AllSubSkillList, GroupedSubSkillListMap } from "./data/SubSkill";
import { SubSkillList } from "./SubSkillList";
import { SubSkillButtons } from "./component/SubSkillButton";
import { styled } from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  selectedSubSkillsObject: SubSkillList;
  onClose: (value: Array<SubSkill>) => void;
}

//ダイアログ外観定義
function SimpleDialog(props: SimpleDialogProps) {
  // props定義
  const { onClose, selectedSubSkillsObject, open } = props;
  // State定義
  // 選択サブスキルリスト
  const [selectedSubSkills, setSelectedSubSkills] = React.useState<Array<SubSkill>>(new Array<SubSkill>());
  // 選択サブスキルに要素を追加
  const addSelectedSubSkill = (skill: SubSkill) => {
    setSelectedSubSkills([...selectedSubSkills, skill]);
  };
  const removeSelectedSubSkill = (skill: SubSkill) => {
    setSelectedSubSkills(selectedSubSkills.filter((s) => s !== skill));
  };

  const handleClose = () => {
    onClose(selectedSubSkills);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      {/* タイトル */}
      <DialogTitle>Select SubSkill</DialogTitle>
      {/* サブスキル一覧 */}
      {Array.from(GroupedSubSkillListMap.entries()).map(([key, subSkills]) => (
        <SubSkillButtons
          subSkills={subSkills}
          selectedSubSkillList={selectedSubSkillsObject}
          add={addSelectedSubSkill}
          remove={removeSelectedSubSkill}
        />
      ))}
    </Dialog>
  );
}

// サブスキルボタン プロパティ
interface SubSkillProps {
  // 生成する対象のサブスキル
  subSkill: SubSkill | undefined;
  onClick: () => void;
}
// サブスキルボタン
export const SubSkillButton: React.FC<SubSkillProps> = ({ subSkill, onClick }) => {
  // 翻訳モジュール
  const { t } = useTranslation();

  // ボタン返却
  return (
    <Button sx={{ fontWeight: "bold" }} fullWidth variant="outlined" color="primary" onClick={onClick}>
      {subSkill != undefined ? t(`SubSkills.${subSkill?.FullName}`) : "NOT SELECTED"}
    </Button>
  );
};

// ダイアログオープンボタン プロパティ定義
export interface SelectSubSkillDialogButtonProps {
  onClose: (value: SubSkillList) => void;
}

// ダイアログオープンボタン定義
const SelectSubSkillDialogButton: React.FC<SelectSubSkillDialogButtonProps> = ({ onClose }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(AllSubSkillList[0]);
  // 選択サブスキルリスト
  const [selectedSubSkillsObject, setselectedSubSkillsObject] = React.useState<SubSkillList>(new SubSkillList([]));

  // ダイアログオープン処理
  const handleClickOpen = () => {
    setOpen(true);
  };

  // ダイアログクローズ時の処理
  const handleClose = (value: Array<SubSkill>) => {
    setOpen(false);
    // 選択値をボタン層で設定
    setselectedSubSkillsObject(new SubSkillList(value));
    // 上位(コンポーネント呼び出し元)から受け取ったonClose関数にボタン層の選択値を渡す
    onClose(selectedSubSkillsObject);
  };

  const { t } = useTranslation();

  return (
    <div>
      <SubSkillButton subSkill={selectedSubSkillsObject?.lv10} onClick={handleClickOpen} />
      <SubSkillButton subSkill={selectedSubSkillsObject?.lv25} onClick={handleClickOpen} />
      <SubSkillButton subSkill={selectedSubSkillsObject?.lv50} onClick={handleClickOpen} />
      <SubSkillButton subSkill={selectedSubSkillsObject?.lv75} onClick={handleClickOpen} />
      <SubSkillButton subSkill={selectedSubSkillsObject?.lv100} onClick={handleClickOpen} />

      <SimpleDialog selectedSubSkillsObject={selectedSubSkillsObject} open={open} onClose={handleClose} />
    </div>
  );
};
export default SelectSubSkillDialogButton;
