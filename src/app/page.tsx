import { useContext, useState } from "react";
import AppFooter from "~/footer/app.footer";
import DeliveryFooter from "~/footer/delivery.footer";
import AppHeader from "~/header/app.header";
import HomePage from "~/home-page/home.page";
import { ThemeContext } from "./theme-provider";

export default function Home() {
  return (
    <>
      <AppHeader />
      <HomePage />
      <AppFooter />
    
    </>
  );
}
