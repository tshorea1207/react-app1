import React from "react";
import { Button, styled, Typography } from "@mui/material";
import logo from "./logo.svg";
import "./App.css";
import BasicSelect from "./component/BasicSelect";
import DialogSelect from "./component/DialogSelect";
import PokemonLevelSlider from "./component/PokemonLevelSlider";
import DiscreteSlider from "./component/SkillLevelSlider";
import { colors } from "@mui/material";
import "./Result.css";
import { PokemonInBox } from "./data/PokemonInBox";

const Unit = styled("div")({
  display: "grid",
  gridTemplateColumns: "6em 3em 3em 3em",
  marginTop: ".5em",
  marginBottom: ".5em",
});

export interface SPCalculationOutputProps {
  selectedPokemonInBox: PokemonInBox | undefined;
}

function SPCalculationOutput(props: SPCalculationOutputProps) {
  return (
    <div className="Output">
      {/* アウトプット */}
      <div>
        {/* SP */}
        <div>
          <Typography display={"inline"} color={"secondary"} marginRight={"0.5rem"}>
            SP
          </Typography>
          <Typography display={"inline"} variant="h5">
            1234
          </Typography>
        </div>

        <Unit>
          {/* きのみエナジー */}
          <Typography bgcolor={colors.green["500"]} className="expert-tag">
            きのみ
          </Typography>
          <span>1234</span>
          <span>(50%)</span>
          <span>2864</span>
        </Unit>

        <Unit>
          {/* 食材エナジー */}
          <Typography bgcolor={colors.orange["500"]} className="expert-tag">
            食材
          </Typography>
          <span>1234</span>
          {/* 食材確率 */}
          <span>50%</span>
          <div>X X</div>
        </Unit>

        <Unit>
          {/* スキルエナジー */}
          <Typography bgcolor={colors.blue["500"]} className="expert-tag">
            スキル
          </Typography>
          <span>1234</span>
          {/* スキル確率 */}
          <span>50%</span>
        </Unit>

        <div>
          {/* おてつだい時間 */}
          <span>おてつだい時間：</span>
          <span>1h00m59s</span>
        </div>
      </div>
    </div>
  );
}

export default SPCalculationOutput;
