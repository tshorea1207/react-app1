import React from "react";
import { Button } from "@mui/material";
import logo from "./logo.svg";
import "./App.css";
import DialogSelect from "./component/DialogSelect";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import SPCalculationOutput from "./SPCalculationResult";
import SPCalculationInput from "./SPCalculationInput";
import testPokemon, { AllPokemonList } from "./data/PokemonBaseStats";
import { useTranslation } from "react-i18next";
import "./i18n/config";
import theme from "./component/Theme";
import { PokemonInBox } from "./data/PokemonInBox";

function App() {
  const { t } = useTranslation();

  const [selectedPokemonInBox, setselectedPokemonInBox] = React.useState<PokemonInBox>();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Pokemon Sleep Checker</p>
          </header>

          <body>
            {/* アウトプット */}
            <SPCalculationOutput selectedPokemonInBox={selectedPokemonInBox} />
            {/* インプット */}
            <SPCalculationInput onChange={setselectedPokemonInBox} />

            <div className="TEST_COMPONENT">
              <Button>text</Button>
              <Button variant="contained">contained</Button>
              <Button variant="outlined">outlined</Button>
              <DialogSelect></DialogSelect>
              <div style={{ display: "grid", gridTemplateColumns: "10em 10em" }}>
                <span>Id</span>
                <span>{testPokemon.Id}</span>
                <span>Name</span>
                <span>{testPokemon.Name}</span>
                {/* <span>SleepType</span><span>{testPokemon.SleepType}</span> */}
                <span>Type</span>
                <span>{testPokemon.Type}</span>
                <span>ExpertOf</span>
                <span>{testPokemon.ExpertOf}</span>
                <span>Skill</span>
                <span>{testPokemon.Skill}</span>
                {/* <span>fp</span><span>{testPokemon.fp}</span> */}
                <span>Frequency</span>
                <span>{testPokemon.Frequency}</span>
                <span>IngredientRatio</span>
                <span>{testPokemon.IngredientRatio}</span>
                <span>SkillRatio</span>
                <span>{testPokemon.SkillRatio}</span>
                {/* <span>Ancestor</span><span>{testPokemon.Ancestor}</span> */}
                {/* <span>EvolutionCount</span><span>{testPokemon.EvolutionCount}</span> */}
                {/* <span>EvolutionLeft</span><span>{testPokemon.EvolutionLeft}</span> */}
                {/* <span>IsFullyEvolved</span><span>{testPokemon.IsFullyEvolved}</span> */}
                <span>CarryLimit</span>
                <span>{testPokemon.CarryLimit}</span>
                {/* <span>Ing1</span><span>{testPokemon.Ing1}</span> */}
                {/* <span>Ing2</span><span>{testPokemon.Ing2}</span> */}
                {/* <span>Ing3</span><span>{testPokemon.Ing3}</span> */}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "10em 10em 10em",
                  backgroundColor: "red",
                }}
              >
                <span>図鑑番号</span>
                <span>Id</span>
                <span>{testPokemon.Id}</span>
                <span>ポケモン種族名称</span>
                <span>Name</span>
                <span>{t(`Pokemons.${testPokemon.Name}`)}</span>
                <span>タイプ</span>
                <span>Type</span>
                <span>{t(`PokemonTypes.${testPokemon.Type}`)}</span>
                <span>とくい</span>
                <span>ExpertOf</span>
                <span>{t(`ExpertOf.${testPokemon.ExpertOf}`)}</span>
                <span>スキル</span>
                <span>Skill</span>
                <span>{t(`MainSkills.${testPokemon.Skill}`)}</span>
                <span>進化先ポケモンがあるか？</span>
                <span>HasEvolution</span>
                <span>{testPokemon.HasEvolution}</span>
                <span>基準お手伝い時間</span>
                <span>Frequency</span>
                <span>{testPokemon.Frequency}</span>
                <span>食材確率</span>
                <span>IngredientRatio</span>
                <span>{testPokemon.IngredientRatio}%</span>
                <span>スキル確率</span>
                <span>SkillRatio</span>
                <span>{testPokemon.SkillRatio}%</span>
                <span>最大所持数</span>
                <span>CarryLimit</span>
                <span>{testPokemon.CarryLimit}</span>

                <span>もってくる食材と個数 A</span>
                <span>IngredientsA</span>
                <div>
                  {testPokemon.Ingredients1?.map((ing) => (
                    <div>
                      <span>{ing.Ingredient}</span>
                      <span>{ing.Amount}</span>
                      <span>{ing.Order}</span>
                    </div>
                  ))}
                </div>
                <span>もってくる食材と個数 B</span>
                <span>IngredientsB</span>
                <div>
                  {testPokemon.Ingredients2?.map((ing) => (
                    <div>
                      <span>{ing.Ingredient}</span>
                      <span>{ing.Amount}</span>
                      <span>{ing.Order}</span>
                    </div>
                  ))}
                </div>
                <span>もってくる食材と個数 C</span>
                <span>IngredientsC</span>
                <div>
                  {testPokemon.Ingredients3?.map((ing) => (
                    <div>
                      <span>{ing.Ingredient}</span>
                      <span>{ing.Amount}</span>
                      <span>{ing.Order}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </body>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
