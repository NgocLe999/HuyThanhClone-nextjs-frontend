"use client";
import Container from "@mui/material/Container";

import {
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from "@mui/material";
import "./header.scss";
import { useEffect, useState } from "react";
import {
  ButtonAboutUs,
  ButtonCollections,
  ButtonGoldPrice,
  ButtonLabGrown,
  ButtonNews,
  ButtonProduct,
  ButtonServices,
} from "./button/button.menu";

function HeaderMenu() {
  const [className, setClassName] = useState<string>("white-bg");

  const listenScrollEvent = () => {
    if (window.scrollY <= 70) {
      setClassName("white-bg");
    } else if (window.scrollY >= 70) {
      setClassName("scroll-header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "White",
        zIndex: 999,
        position: "sticky",
        top: 0,
      }}
      className={className}
    >
      <Container
        maxWidth="xl"
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ButtonAboutUs />
        <ButtonCollections />
        <ButtonProduct />
        <ButtonLabGrown />
        <ButtonNews />
        <ButtonServices />
        <ButtonGoldPrice />
      </Container>
    </div>
  );
}
export default HeaderMenu;

//
