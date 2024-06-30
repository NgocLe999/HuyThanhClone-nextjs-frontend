"use client";
// import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { sendRequest } from "~/utils/api";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "~/lib/redux/hooks";
import {
  deleteProductCart,
  setShowCart,
} from "~/lib/redux/slice/cartDrawerSlice";
import { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";

export default function TemporaryCartDrawer() {
  const dispatch = useAppDispatch();
  const initState = [
    {
      featured_image: {
        src: "",
      },
      name: "",
      price: 0,
      type: "",
    },
  ];

  const [productInCart, setProductInCart] = useState(initState);

  const isOpenCart = useAppSelector((state) => state.cart.isOpenCart);
  const productDetails = useAppSelector(
    (state) => state.cart.data as IProduct[]
  );
  console.log("check productDetails:", productDetails);

  const toggleDrawer = (newOpen: boolean) => () => {
    dispatch(setShowCart(newOpen));
  };

  const handleRemove = (id: string) => {
    dispatch(deleteProductCart(id));
  };
  return (
    <>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer anchor="right" open={isOpenCart} onClose={toggleDrawer(false)}>
        <h4 style={{ textAlign: "center", margin: "10px 0px" }}>GIỎ HÀNG</h4>
        <Divider />
        <Box sx={{ width: 350 }} role="presentation">
          {productDetails &&
            productDetails.map((product, index) => {
              return (
                <>
                  <Box
                    key={`${index}-cart`}
                    sx={{
                      margin: "20px 20px",
                      display: "flex",
                      gap: "15px",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <Image
                      alt=""
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.featured_image.src}`}
                      width="70"
                      height="70"
                      style={{
                        maxWidth: "100%",
                        objectFit: "cover",
                        borderRadius: "20px",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "10px",
                        gap: "5px",
                      }}
                    >
                      <span>{product.name}</span>
                      <span>{product.type}</span>
                      <IconButton
                        onClick={() => handleRemove(product._id)}
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 20,
                          cursor: "pointer",
                        }}
                      >
                        <ClearIcon />
                      </IconButton>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          sx={{ height: "25px", minWidth: "30px" }}
                          color="primary"
                          variant="outlined"
                        >
                          +
                        </Button>
                        <span>1</span>
                        <Button
                          sx={{ height: "25px", minWidth: "30px" }}
                          color="error"
                          variant="outlined"
                        >
                          -
                        </Button>
                        <span style={{ fontWeight: "600", color: "#333333" }}>
                          {`${product.price.toLocaleString("en-US", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}đ`}
                        </span>
                      </Box>
                    </Box>
                  </Box>
                  <Divider />
                </>
              );
            })}
        </Box>
      </Drawer>
    </>
  );
}
