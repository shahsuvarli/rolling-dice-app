import {
  CgDice1,
  CgDice2,
  CgDice3,
  CgDice4,
  CgDice5,
  CgDice6,
} from "react-icons/cg";
const size = 150;
const color = "dodgerblue";

const dices = [
  { name: "Yek", dice: <CgDice1 size={size} color={color} /> },
  {
    name: "Du",
    dice: <CgDice2 size={size} color={color} />,
  },
  {
    name: "Sə",
    dice: <CgDice3 size={size} color={color} />,
  },
  {
    name: "Cahar",
    dice: <CgDice4 size={size} color={color} />,
  },
  {
    name: "Pənc",
    dice: <CgDice5 size={size} color={color} />,
  },
  {
    name: "Şeş",
    dice: <CgDice6 size={size} color={color} />,
  },
];

export default dices;
