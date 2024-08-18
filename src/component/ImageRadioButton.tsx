import React from "react";
import { Badge, FormControlLabel, IconButton, Radio, RadioGroup } from "@mui/material";
import { styled } from "@mui/system";

// 型定義
interface ImageRadioButtonProps {
  id?: string;
  name: string;
  value: string;
  imageSrc: string;
  checked: boolean;
  badge?: string;
  size?: string;
  visible?: boolean;
  onClick: () => void; // onClickに合わせて型を修正
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageRadio = styled(Radio)(({ theme }) => ({
  display: "none",
}));

const ImageContainer = styled("div")<{ checked: boolean }>(({ theme, checked }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  border: checked ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent",
  borderRadius: "50%",
  padding: "4px",
  marginLeft: 0,
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.08)", // 波紋エフェクトのための背景色
  },
}));

const ImageContainer2 = styled(IconButton)<{ checked: boolean }>(({ theme, checked }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  border: checked ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent",
  borderRadius: "50%",
  padding: "4px",
  marginLeft: 0,
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.08)", // 波紋エフェクトのための背景色
  },
}));

const ImageRadioButton: React.FC<ImageRadioButtonProps> = ({
  id,
  name,
  value,
  imageSrc,
  checked,
  badge,
  size,
  visible,
  onClick, // onClickに合わせて型を修正
  onChange,
}) => {
  if (!visible) return null;
  const Image = styled("img")({
    width: size ?? "30px", // 画像のサイズを調整
    height: size ?? "30px",
    borderRadius: "50%",
    userSelect: "none", // 選択を禁止(ダブルクリックでテキスト選択されてしまい見にくくなるため)
  });

  return (
    <FormControlLabel
      // デフォルトだと左右にmarginを形成する。左はマイナスマージンのため、枠からはみ出てしまう。それを防ぐため、0を指定
      style={{ marginLeft: "0", marginRight: "0.5em", marginTop: "0.2em" }}
      control={<ImageRadio id={id} name={name} value={value} checked={checked} onClick={onClick} onChange={onChange} />}
      label={
        <ImageContainer checked={checked}>
          <Badge badgeContent={badge} color="primary" overlap="circular">
            <Image src={imageSrc} alt={`Option ${value}`} />
          </Badge>
        </ImageContainer>
      }
    />
  );
};

export default ImageRadioButton;
