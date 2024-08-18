import * as React from "react";
import { CollectingIngredient, IngredientType } from "./data/Ingredient";
import { Badge, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { PokemonBaseStats, AllPokemonList } from "./data/PokemonBaseStats";
import ImageRadioButton from "./component/ImageRadioButton";

export interface Props {
  open: boolean;
  selectedPokemon: PokemonBaseStats;
  onClose: (value: PokemonBaseStats) => void;
}

export default function SelectIngredients() {
  const [open, setOpen] = React.useState(false);
  const [selectedPokemon, setSelectedPokemon] = React.useState(AllPokemonList[0]);
  const [ingredient1, setSelectedIngredient1] = React.useState(selectedPokemon.Ingredients1[0]);
  const [ingredient2, setSelectedIngredient2] = React.useState(selectedPokemon.Ingredients2[1]);
  const [ingredient3, setSelectedIngredient3] = React.useState(selectedPokemon.Ingredients3[0]);

  const resetSelectedIngredient = () => {
    setSelectedIngredient1(selectedPokemon.Ingredients1[0]);
    setSelectedIngredient2(selectedPokemon.Ingredients2[0]);
    setSelectedIngredient3(selectedPokemon.Ingredients3[0]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (ingredient: CollectingIngredient) => {
    setOpen(false);
    setSelectedIngredient1(ingredient);
  };
  const { t } = useTranslation();

  return (
    <div>
      {/* 食材1 */}
      {selectedPokemon.Ingredients1.map((ingredient, index) => (
        <ImageRadioButton
          name={"Ingredient1"}
          value={ingredient.Order.toString()}
          imageSrc={`./images/IngredientIcon/${ingredient.Ingredient}.png`}
          checked={ingredient1.Order === ingredient.Order}
          badge={ingredient.Amount.toString()}
          visible={ingredient1 === ingredient}
          size="30px"
          onClick={function (): void {
            setSelectedIngredient1(selectedPokemon.Ingredients1[(index + 1) % selectedPokemon.Ingredients1.length]);
          }}
        />
      ))}
      {/* 食材2 */}
      {selectedPokemon.Ingredients2.map((ingredient, index) => (
        <ImageRadioButton
          name={"Ingredient2"}
          value={ingredient.Order.toString()}
          imageSrc={`./images/IngredientIcon/${ingredient2.Ingredient}.png`}
          checked={ingredient2.Order === ingredient.Order}
          badge={ingredient.Amount.toString()}
          visible={ingredient2 === ingredient}
          size="30px"
          onClick={function (): void {
            setSelectedIngredient2(selectedPokemon.Ingredients2[(index + 1) % selectedPokemon.Ingredients2.length]);
          }}
        />
      ))}
      {/* 食材3 */}
      {selectedPokemon.Ingredients3.map((ingredient, index) => (
        <ImageRadioButton
          name={"Ingredient2"}
          value={ingredient.Order.toString()}
          imageSrc={`./images/IngredientIcon/${ingredient3.Ingredient}.png`}
          checked={ingredient3.Order === ingredient.Order}
          badge={ingredient.Amount.toString()}
          visible={ingredient3 === ingredient}
          size="30px"
          onClick={function (): void {
            setSelectedIngredient3(selectedPokemon.Ingredients3[(index + 1) % selectedPokemon.Ingredients3.length]);
          }}
          //   onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
          //   throw new Error("Function not implemented.");
          //   }}
        />
      ))}
    </div>
  );
}
