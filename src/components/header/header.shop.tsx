"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import HeaderSearch from "./header.search";
import { Container } from "@mui/material";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HeaderShop = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xl={4} xs={4}>
          <Item
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              color: "#333333",
            }}
          >
            <LocationOnIcon sx={{ color: "#333333" }} />
            Cửa hàng
          </Item>
        </Grid>
        <Grid item xl={4} xs={4} sx={{ display: "flex" }}>
          <Image
            alt="Random image"
            src="/assets/logo.webp"
            width={300}
            height={80}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid item xl={4} xs={4}>
          <HeaderSearch />
        </Grid>
      </Grid>
    </Container>
  );
};
export default HeaderShop;
