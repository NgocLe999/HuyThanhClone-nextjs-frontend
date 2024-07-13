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
  decreaseProduct,
  deleteProductCart,
  increaseProduct,
  noteOrder,
  setShowCart,
} from "~/lib/redux/slice/cartDrawerSlice";
import { useCallback, useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, TextField } from "@mui/material";
import { current } from "immer";
import Link from "next/link";

export default function TemporaryCartDrawer() {
  const dispatch = useAppDispatch();
  const [note, setNote] = useState("");
  const isOpenCart = useAppSelector((state) => state.cart.isOpenCart);
  const productDetails = useAppSelector(
    (state) => state.cart.data as IProduct[]
  );
  const totalPay = useAppSelector((state) => state.cart.totalPay);
  const state = useAppSelector((state) => state.cart);
  // console.log("check productDetails:", productDetails);
  const toggleDrawer = (newOpen: boolean) => () => {
    dispatch(setShowCart(newOpen));
  };

  const handleRemove = (id: string) => {
    dispatch(deleteProductCart(id));
  };

  const handleIncrease = (id: string) => {
    dispatch(increaseProduct(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseProduct(id));
  };

  const handleChangeValue = (value: string) => {
    setNote(value);
    dispatch(noteOrder(note));
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
                          onClick={() => handleIncrease(product._id)}
                        >
                          +
                        </Button>
                        <span>{product.sole_quantity}</span>
                        <Button
                          sx={{ height: "25px", minWidth: "30px" }}
                          color="error"
                          variant="outlined"
                          onClick={() => handleDecrease(product._id)}
                        >
                          -
                        </Button>
                        {/* <span style={{ fontWeight: "600", color: "#333333" }}>
                          {`${product.price .toLocaleString("en-US", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}đ`}
                        </span> */}
                        <span style={{ fontWeight: "600", color: "#333333" }}>
                          {`${(
                            product.price * product.sole_quantity
                          ).toLocaleString("en-US")}đ`}
                        </span>
                      </Box>
                    </Box>
                  </Box>
                  <Divider />
                </>
              );
            })}
        </Box>
        <strong
          style={{ marginLeft: "10px", marginTop: "10px" }}
        >{`TỔNG TIỀN: ${totalPay.toLocaleString("en-US")}đ`}</strong>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "35ch", marginTop: "10px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Ghi chú cho cửa hàng"
            multiline
            rows={4}
            defaultValue=""
            value={note}
            sx={{ width: "100%" }}
            onChange={(e) => handleChangeValue(e.target.value)}
          />
        </Box>
        <Link
          href={"/checkout"}
          onClick={() => {
            dispatch(setShowCart(false));
  
          }}
        >
          <Button
            sx={{
              backgroundColor: "#333333",
              color: "#fff",
              "&:hover": {
                //   color: "#333333",
                backgroundColor: "#333333",
              },
              margin: "0 10px",
            }}
            variant="contained"
          >
            THANH TOÁN
          </Button>
        </Link>
      </Drawer>
    </>
  );
}
