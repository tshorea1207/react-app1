import * as React from "react";
import { CollectingIngredient, IngredientType } from "./data/Ingredient";
import { Badge, Button, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PokemonBaseStats, AllPokemonList } from "./data/PokemonBaseStats";
import ImageRadioButton from "./component/ImageRadioButton";
import { PokemonInBox } from "./data/PokemonInBox";

export interface Props {
  selectedPokemon: PokemonBaseStats;
  onChange: Array<(value: number) => void>;
}

const SelectIngredients: React.FC<Props> = ({ selectedPokemon }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedPokemon_, setSelectedPokemon] = React.useState(AllPokemonList[0]);
  const [ingredient1, setSelectedIngredient1] = React.useState(selectedPokemon.Ingredients1[0]);
  const [ingredient2, setSelectedIngredient2] = React.useState(selectedPokemon.Ingredients2[0]);
  const [ingredient3, setSelectedIngredient3] = React.useState(selectedPokemon.Ingredients3[0]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (ingredient: CollectingIngredient) => {
    setOpen(false);
    setSelectedIngredient1(ingredient);
  };
  const { t } = useTranslation();

  const Unit = styled("div")({
    display: "grid",
    gridTemplateColumns: "auto",
    alignContent: "baseline",
  });

  return (
    <div style={{ display: "flex" }}>
      <Unit>
        {/* 食材1 */}
        {selectedPokemon.Ingredients1.map((ingredient, index) => (
          <ImageRadioButton
            name={"Ingredient1"}
            value={ingredient.Order.toString()}
            imageSrc={`./images/IngredientIcon/${ingredient.Ingredient}.png`}
            checked={ingredient1.Order === ingredient.Order}
            badge={ingredient.Amount.toString()}
            visible={true}
            size="30px"
            onClick={function (): void {
              setSelectedIngredient1(ingredient);
            }}
          />
        ))}
      </Unit>
      <Unit>
        {/* 食材2 */}
        {selectedPokemon.Ingredients2.map((ingredient, index) => (
          <ImageRadioButton
            name={"Ingredient2"}
            value={ingredient.Order.toString()}
            imageSrc={`./images/IngredientIcon/${ingredient.Ingredient}.png`}
            checked={ingredient2.Order === ingredient.Order}
            badge={ingredient.Amount.toString()}
            visible={true}
            size="30px"
            onClick={function (): void {
              setSelectedIngredient2(ingredient);
            }}
          />
        ))}
      </Unit>
      <Unit>
        {/* 食材3 */}
        {selectedPokemon.Ingredients3.map((ingredient, index) => (
          <ImageRadioButton
            name={"Ingredient2"}
            value={ingredient.Order.toString()}
            imageSrc={`./images/IngredientIcon/${ingredient.Ingredient}.png`}
            checked={ingredient3.Order === ingredient.Order}
            badge={ingredient.Amount.toString()}
            visible={true}
            size="30px"
            onClick={function (): void {
              setSelectedIngredient3(ingredient);
            }}
            onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
              setSelectedIngredient3(ingredient);
            }}
          />
        ))}
      </Unit>
    </div>
  );
};

export default SelectIngredients;
