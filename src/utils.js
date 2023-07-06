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

export const addOnsList = [
  {
    text: "Online service",
    smallText: "Access to multiplayer games",
    price: 1,
    yearlyPrice: 10,
    slug: 0,
  },
  {
    text: "Large storage",
    smallText: "Extra 1TB of cloud save",
    price: 2,
    yearlyPrice: 20,
    slug: 1,
  },
  {
    text: "Pro",
    smallText: "adsasd",
    price: 2,
    yearlyPrice: 20,
    id: 2,
  },
];

export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
};
