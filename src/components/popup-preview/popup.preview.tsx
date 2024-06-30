"use client";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Grid, Grow } from "@mui/material";
import Carousel from "~/product/fancybox-image/carousel";
import Image from "next/image";
import { sendRequest } from "~/utils/api";
import { useAppDispatch, useAppSelector } from "~/lib/redux/hooks";
import { setShowProduct } from "~/lib/redux/slice/productSlice";

const style = {
  position: "absolute" as "absolute",

  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "50%",
  minHeight: 420,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "5px",
  boxShadow: 2,
  p: 4,
};

export default function PopupPreviewViewProduct(props: any) {
  const dispatch = useAppDispatch();
  // const [productDetails, setProductDetails] = useState<IProduct>(initState);
  const isOpen = useAppSelector((state) => state.product.isOpen as boolean);
  const productDetails = useAppSelector(
    (state) => state.product.data as IProduct
  );

  const handleClose = () => {
    dispatch(setShowProduct(false));
  };

  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <ModalDetailProduct productDetails={productDetails} />
      </Modal>
    </>
  );
}

export const ModalDetailProduct = (props: any) => {
  const { productDetails } = props;
  return (
    <Box sx={style}>
      <Grid container spacing={2} columns={16} sx={{ overflow: "hidden" }}>
        <Grid item xl={8} className="section-1-left">
          <Carousel
            // Sample options
            options={{ infinite: false }}
          >
            {productDetails.image.map((image: any, index: number) => {
              return (
                <React.Fragment>
                  <div
                    key={`fancybox-${index}`}
                    className="f-carousel__slide"
                    data-fancybox="gallery"
                    //   data-src="https://lipsum.app/id/60/1600x1200"
                    data-src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${image.src}`}
                    data-thumb-src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${image.src}`}
                  >
                    <Image
                      alt=""
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${image.src}`}
                      width="400"
                      height="300"
                      style={{
                        maxWidth: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </React.Fragment>
              );
            })}
          </Carousel>
        </Grid>
        <Grid item xl={8} className="section-1-right">
          <Box
            className="content"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <h4>{productDetails.name}</h4>
            <span>
              Mã sản phẩm:
              <span
                style={{ fontWeight: 600, marginLeft: "5px" }}
                className="product-code"
              >
                {productDetails.code_product}
              </span>
            </span>
            <span>{productDetails.description.replace("<br>", ".")}</span>
            <span style={{ fontWeight: 600 }} className="price">
              {`${productDetails.price.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}đ`}
            </span>
            <div className="color">
              <span>Màu sắc </span>
              <Button
                color="warning"
                sx={{ width: "20%", marginBottom: "5px" }}
              >
                Vàng
              </Button>
            </div>
            <Button
              sx={{
                backgroundColor: "#333333",
                color: "#fff",
                "&:hover": {
                  //   color: "#333333",
                  backgroundColor: "#333333",
                },
              }}
              variant="contained"
            >
              THÊM VÀO GIỎ HÀNG
            </Button>
            <div style={{ display: "flex", gap: "20px" }} className="help">
              <span>Cần giúp đỡ?</span>
              <span>Phone: 1900 544 544</span>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
