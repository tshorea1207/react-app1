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
import NatureListJson from "./data/Nature.json";

export enum NatureStatus {
  None,
  Speed,
  Recovery,
  Ingredient,
  Skill,
  Exp,
}

export interface Nature {
  name: string;
  namejpn: string;
  up: NatureStatus;
  down: NatureStatus;
}

export const AllNatureList: Array<Nature> = [
  {
    name: "Lonely",
    namejpn: "さみしがり",
    up: NatureStatus.Speed,
    down: NatureStatus.Recovery,
  },
  {
    name: "Adamant",
    namejpn: "いじっぱり",
    up: NatureStatus.Speed,
    down: NatureStatus.Ingredient,
  },
  {
    name: "Naughty",
    namejpn: "やんちゃ",
    up: NatureStatus.Speed,
    down: NatureStatus.Skill,
  },
  {
    name: "Brave",
    namejpn: "ゆうかん",
    up: NatureStatus.Speed,
    down: NatureStatus.Exp,
  },
  {
    name: "Bold",
    namejpn: "ずぶとい",
    up: NatureStatus.Recovery,
    down: NatureStatus.Speed,
  },
  {
    name: "Impish",
    namejpn: "わんぱく",
    up: NatureStatus.Recovery,
    down: NatureStatus.Ingredient,
  },
  {
    name: "Lax",
    namejpn: "のうてんき",
    up: NatureStatus.Recovery,
    down: NatureStatus.Skill,
  },
  {
    name: "Relaxed",
    namejpn: "のんき",
    up: NatureStatus.Recovery,
    down: NatureStatus.Exp,
  },
  {
    name: "Modest",
    namejpn: "ひかえめ",
    up: NatureStatus.Ingredient,
    down: NatureStatus.Speed,
  },
  {
    name: "Mild",
    namejpn: "おっとり",
    up: NatureStatus.Ingredient,
    down: NatureStatus.Recovery,
  },
  {
    name: "Rash",
    namejpn: "うっかりや",
    up: NatureStatus.Ingredient,
    down: NatureStatus.Skill,
  },
  {
    name: "Quiet",
    namejpn: "れいせい",
    up: NatureStatus.Ingredient,
    down: NatureStatus.Exp,
  },
  {
    name: "Calm",
    namejpn: "おだやか",
    up: NatureStatus.Skill,
    down: NatureStatus.Speed,
  },
  {
    name: "Gentle",
    namejpn: "おとなしい",
    up: NatureStatus.Skill,
    down: NatureStatus.Recovery,
  },
  {
    name: "Careful",
    namejpn: "しんちょう",
    up: NatureStatus.Skill,
    down: NatureStatus.Ingredient,
  },
  {
    name: "Sassy",
    namejpn: "なまいき",
    up: NatureStatus.Skill,
    down: NatureStatus.Exp,
  },
  {
    name: "Timid",
    namejpn: "おくびょう",
    up: NatureStatus.Exp,
    down: NatureStatus.Speed,
  },
  {
    name: "Hasty",
    namejpn: "せっかち",
    up: NatureStatus.Exp,
    down: NatureStatus.Recovery,
  },
  {
    name: "Jolly",
    namejpn: "ようき",
    up: NatureStatus.Exp,
    down: NatureStatus.Ingredient,
  },
  {
    name: "Naive",
    namejpn: "むじゃき",
    up: NatureStatus.Exp,
    down: NatureStatus.Skill,
  },
  {
    name: "Bashful",
    namejpn: "がんばりや",
    up: NatureStatus.None,
    down: NatureStatus.None,
  },
  {
    name: "Hardy",
    namejpn: "すなお",
    up: NatureStatus.None,
    down: NatureStatus.None,
  },
  {
    name: "Docile",
    namejpn: "てれや",
    up: NatureStatus.None,
    down: NatureStatus.None,
  },
  {
    name: "Quirky",
    namejpn: "きまぐれ",
    up: NatureStatus.None,
    down: NatureStatus.None,
  },
  {
    name: "Serious",
    namejpn: "まじめ",
    up: NatureStatus.None,
    down: NatureStatus.None,
  },
];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: Nature;
  onClose: (value: Nature) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: Nature) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select Nature</DialogTitle>
      <List sx={{ pt: 0 }}>
        {AllNatureList.map((nature) => (
          <ListItem disableGutters key={nature.name}>
            <ListItemButton onClick={() => handleListItemClick(nature)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}></Avatar>
              </ListItemAvatar>
              <ListItemText primary={nature.namejpn} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export interface SelectNatureDialogButtonProps {
  onChange: (value: Nature) => void;
}

export default function SelectNatureDialogButton(props: SelectNatureDialogButtonProps) {
  const { onChange } = props;

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState<Nature>(AllNatureList[24]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: Nature) => {
    setOpen(false);
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div>
      <Button sx={{ fontWeight: "bold" }} fullWidth variant="contained" color="primary" onClick={handleClickOpen}>
        {selectedValue.namejpn}
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
