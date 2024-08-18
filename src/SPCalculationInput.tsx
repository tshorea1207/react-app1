import React from "react";
import { styled } from "@mui/material";
import "./App.css";
import PokemonLevelSlider from "./component/PokemonLevelSlider";
import DiscreteSlider from "./component/SkillLevelSlider";
import "./Result.css";
import SimpleDialogDemo, { AllNatureList, Nature } from "./SelectNatureDialog";
import SelectPokemonDialogButton from "./SelectPokemonDialog";
import SelectIngredientsInList from "./SelectIngredientsInList";
import { AllPokemonList } from "./data/PokemonBaseStats";
import "./i18n/config";
import { useTranslation } from "react-i18next";
import SelectSubSkillDialog from "./SelectSubSkillDialog";
import { SubSkillList } from "./SubSkillList";
import SelectNatureDialogButton from "./SelectNatureDialog";
import { PokemonInBox } from "./data/PokemonInBox";

const InputContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "8em 13rem",
  gridAutoRows: "auto",
  marginTop: "1.5em",
  marginBottom: "1.5em",
  alignContent: "center",
  alignItems: "center",
  "& > span": {
    margin: "0.2em",
  },
});

export interface SPCalculationInputProps {
  onChange: (value: PokemonInBox) => void;
}

function SPCalculationInput(props: SPCalculationInputProps) {
  const { onChange } = props;
  const [selectedPokemon, setSelectedPokemon] = React.useState(AllPokemonList[0]);
  const [ingredient1, setSelectedIngredient1] = React.useState(selectedPokemon.Ingredients1[0]);
  const [ingredient2, setSelectedIngredient2] = React.useState(selectedPokemon.Ingredients2[0]);
  const [ingredient3, setSelectedIngredient3] = React.useState(selectedPokemon.Ingredients3[0]);
  const [mainSkillLevel, setMainSkillLevel] = React.useState<number>(6);
  const [subSkills, setSubSkills] = React.useState<SubSkillList>(new SubSkillList([]));
  const [nature, setNature] = React.useState<Nature>(
    // せいかく：まじめを初期選択
    AllNatureList.find((nature) => nature.name === "serious") ?? AllNatureList[0]
  );

  // 選択した種族食材・スキル・性格が変更された場合、捕獲ポケモンに反映
  React.useEffect(() => {
    // 選択ポケモンを定義
    let selectedPokemonInBox: PokemonInBox = new PokemonInBox();
    // ポケモン種族値を設定
    selectedPokemonInBox = selectedPokemon;
    // 食材を設定
    selectedPokemonInBox.ActualIngredients1 = ingredient1;
    selectedPokemonInBox.ActualIngredients2 = ingredient2;
    selectedPokemonInBox.ActualIngredients3 = ingredient3;
    // メインスキルレベルを設定
    selectedPokemonInBox.MainSkillLevel = mainSkillLevel;
    // サブスキルを設定
    selectedPokemonInBox.SubSkillList = subSkills;
    // せいかくを設定
    selectedPokemonInBox.Nature = nature;
    // 反映結果を親ダイアログに通知
    onChange(selectedPokemonInBox);
  }, [selectedPokemon, ingredient1, ingredient2, ingredient3, mainSkillLevel, subSkills, nature]);

  const { t } = useTranslation();
  return (
    <InputContainer className="SPCalculationInput">
      {/* インプット */}
      {/* レベル */}
      <span>レベル</span>
      <span>
        <PokemonLevelSlider />
      </span>
      {/* ポケモン指定 */}
      <span>ポケモン</span>
      <span>
        {/* ダイアログクローズ時に選択ポケモンを更新 */}
        <SelectPokemonDialogButton onClose={setSelectedPokemon} />
      </span>
      {/* 食材 */}
      <span>食材</span>
      <span>
        <SelectIngredientsInList
          selectedPokemon={selectedPokemon}
          onChange={[() => setSelectedIngredient1, () => setSelectedIngredient2, () => setSelectedIngredient3]}
        />
      </span>
      {/* メインスキル */}
      <span>メインスキル</span>
      <span>
        <DiscreteSlider onChange={setMainSkillLevel} />
      </span>
      {/* サブスキル */}
      <span>サブスキル</span>
      <span>
        <SelectSubSkillDialog onClose={setSubSkills} />
      </span>
      {/* せいかく */}
      <span>せいかく</span>
      <span>
        <SelectNatureDialogButton onChange={setNature} />
      </span>
    </InputContainer>
  );
}

export default SPCalculationInput;
