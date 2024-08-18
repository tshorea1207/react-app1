import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { PokemonBaseStats, AllPokemonList } from "./data/PokemonBaseStats";
import "./i18n/config";
import { Card, CardActionArea, CardContent, CardMedia, Icon, ListItemIcon } from "@mui/material";
import { useTranslation } from "react-i18next";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: PokemonBaseStats;
  onClose: (value: PokemonBaseStats) => void;
}

//ダイアログ外観定義
function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: PokemonBaseStats) => {
    onClose(value);
  };

  const { t } = useTranslation();

  // ".MuiCardContent-root":{"padding":"0"};

  function Pad0(target: string | number, digit: number) {
    return target.toString().padStart(3, "0");
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      {/* タイトル */}
      <DialogTitle>Select Pokemon</DialogTitle>
      {/* リスト */}
      <List sx={{ pt: 0, textAlign: "center" }}>
        {AllPokemonList.map((pokemon) => (
          <>
            <Card
              sx={{ width: 100, display: "inline-block", margin: "1%" }}
              onClick={() => handleListItemClick(pokemon)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image={`./images/PokemonIcon/${Pad0(pokemon.Id, 3)}.png`}
                  alt={pokemon.Id.toString()}
                />
                <CardContent sx={{ height: 40, margin: 0, padding: 0, verticalAlign: "center" }}>
                  <Typography gutterBottom variant="caption" component="div">
                    {t(`Pokemons.${pokemon.Name}`)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            {/* <ListItem disableGutters key={pokemon.Name}>
              <ListItemButton onClick={() => handleListItemClick(pokemon)}>
                <ListItemIcon>
                  <Icon>
                    <img
                      src="./images/PokemonIcon/Undefined.png"
                      className="PokemonIcon"
                      alt={pokemon.Id.toString()}
                    />
                  </Icon>
                </ListItemIcon>
                <ListItemText primary={t(`Pokemons.${pokemon.Name}`)} />
              </ListItemButton>
            </ListItem> */}
          </>
        ))}
      </List>
    </Dialog>
  );
}

export interface SelectPokemonDialogButtonProps {
  onClose: (value: PokemonBaseStats) => void;
}

const SelectPokemonDialogButton: React.FC<SelectPokemonDialogButtonProps> = ({ onClose }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(AllPokemonList[0]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // ダイアログクローズ時の処理
  const handleClose = (value: PokemonBaseStats) => {
    setOpen(false);
    // 選択値をボタン層で設定
    setSelectedValue(value);
    // 上位(コンポーネント呼び出し元)から受け取ったonClose関数にボタン層の選択値を渡す
    onClose(value);
  };
  const { t } = useTranslation();

  return (
    <div>
      <Button sx={{ fontWeight: "bold" }} fullWidth variant="outlined" color="primary" onClick={handleClickOpen}>
        {t(`Pokemons.${selectedValue.Name}`)}
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
};
export default SelectPokemonDialogButton;
