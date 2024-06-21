"use client";
import { Box, Container, Fade, Grid, IconButton, styled } from "@mui/material";
import "~/collections/collections.scss";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import { produce } from "immer";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  // color: theme.palette.getContrastText(black[0]),
  backgroundColor: "#fff",
  color: "black",
  border: "1px solid #fff",
  "&:hover": {
    backgroundColor: "#E25050",
    color: "#fff",
  },
}));

export function QuiltedImageList(props: any) {
  const { productItem } = props;
  const productInfo = productItem.map((item: any, index: number) => {
    return {
      img: `${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.featured_image.src}`,
      img2: `${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.image[1].src}`,
      name: item.title,
      price: `${item.price.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}đ`,
    };
  });
  // console.log(productInfo);
  const productImage = productInfo.map((item: any, index: number) => {
    if (index === 0) {
      return Object.assign(item, { rows: 2, cols: 6 });
    } else {
      return Object.assign(item, { rows: 1, cols: 3 });
    }
  });
  console.log("productImage >>>>>>", productImage);

  return (
    <ImageList variant="quilted" cols={15} rowHeight={370} gap={20}>
      {productImage.map((item: any, index: number) => (
        <>
          <ImageListItem
            className="grid_item"
            key={index}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              backgroundColor: "#fafafa",
              overflow: "hidden",
              gap: 1,
            }}
          >
            <Box className="product-img" sx={{ position: "relative" }}>
              <Link className="link" href={"/"}>
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="eager"
                  key={index}
                  style={{
                    width: "100%",
                    border: "1px solid #ccc",
                    objectFit: "cover",
                  }}
                />
                <img
                  {...srcset(item.img2, 121, item.rows, item.cols)}
                  // src="/assets/img_service_4.webp"
                  alt={item.title}
                  // loading="eager"
                  key={index}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Link>
              <Box
                className="product-actions"
                sx={{
                  bottom: 1,
                  zIndex: 1,
                  width: "100%",
                  position: "absolute",
                }}
              >
                <Grid
                  className="stack"
                  spacing={2}
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <IconButton
                    className="btn-left"
                    sx={{
                      borderRadius: "3px",
                      backgroundColor: "#fff",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#E25050",
                        color: "#fff",
                        border: "1px solid #ccc",
                      },
                      transform: "translateX(-100px)",
                      transition: "transform 0.4s, opacity 0.3s",
                      opacity: 0,
                      position: "absolute",
                      bottom: 0,
                      height: "40px",
                      left: "15%",
                    }}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <ColorButton
                    sx={{
                      transform: "translateY(100px)",
                      transition: "transform 0.4s, opacity 0.3s",
                      opacity: 0,
                      position: "absolute",
                      bottom: 0,
                      height: "40px",
                    }}
                    className="btn-buyNow"
                    variant="contained"
                  >
                    MUA NGAY
                  </ColorButton>
                  <IconButton
                    className="btn-right"
                    sx={{
                      borderRadius: "3px",
                      backgroundColor: "#fff",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#E25050",
                        color: "#fff",
                        border: "1px solid #ccc",
                      },
                      transform: "translateX(100px)",
                      transition: "transform 0.4s, opacity 0.3s",
                      opacity: 0,
                      position: "absolute",
                      bottom: 0,
                      right: "15%",
                      height: "40px",
                    }}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </Grid>
              </Box>
            </Box>
            <Box
              className="image-desc"
              style={{
                display: "flex",
                flexDirection: "column",
                // position: "absolute",
                // bottom: 3,
                width: "100%",
                alignItems: "center",
                gap: 10,
                // marginTop: "10px",
              }}
            >
              <span style={{ fontWeight: "500", fontSize: "16px" }}>
                {item.name}
              </span>
              <span style={{ color: "#E25050", fontWeight: "600" }}>
                {item.price}
              </span>
            </Box>
          </ImageListItem>
        </>
      ))}
    </ImageList>
  );
}

const CollectionsPage = (props: any) => {
  const { productItem } = props;
  return (
    <Container maxWidth="xl">
      <h1>TẤT CẢ SẢN PHẨM</h1>
      <div className="filter">
        <div>Bộ lọc</div>
        <KeyboardArrowDownIcon />
        <div>Sắp xếp theo</div>
        <KeyboardArrowDownIcon />
      </div>
      <QuiltedImageList productItem={productItem} />
    </Container>
  );
};

export default CollectionsPage;
