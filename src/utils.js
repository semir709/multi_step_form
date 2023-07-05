import { createContext } from "react";
import arcade from "./assets/images/icon-arcade.svg";
import advanced from "./assets/images/icon-advanced.svg";
import pro from "./assets/images/icon-pro.svg";

export const Context = createContext(null);

export const cards = [
  {
    title: "Arcade",
    priceMonthly: 9,
    priceYearly: 90,
    img: arcade,
    alt: "arcade",
  },
  {
    title: "Advanced",
    priceMonthly: 12,
    priceYearly: 120,
    img: advanced,
    alt: "advanced",
  },
  {
    title: "Pro",
    priceMonthly: 15,
    priceYearly: 150,
    img: pro,
    alt: "pro",
  },
];
