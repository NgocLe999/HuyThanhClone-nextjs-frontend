"use client";
import {
  Box,
  Button,
  ButtonGroup,
  ButtonProps,
  Grid,
  colors,
  styled,
} from "@mui/material";
import "~/product/fancybox-image/fancybox.scss";
import Fancybox from "./fancybox-image/fancybox";
import Carousel from "./fancybox-image/carousel";
import Image from "next/image";
import Link from "next/link";
import "~/product/product.details.scss";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { useCallback, useState } from "react";
import WarrantyPolicy from "./policy/warranty";
import ExchangePolicy from "./policy/exchange";

const ButtonSearchShop = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#333333",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#333333",
    color: "#fff",
  },
}));

const ButtonBuyNow = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: "#333333",
  color: "#fff",
  "&:hover": {
    //   color: "#333333",
    backgroundColor: "#333333",
  },
}));
const ButtonTabLink = styled(Button)({
  fontSize: 16,
  padding: "6px 12px",
  lineHeight: 1.5,
  color: "black",
  "&:focus": {
    fontWeight: 600, // 500
  },
});

const ProductDetail = (props: any) => {
  const { productDetails } = props;
  const imageProduct = productDetails.image;

  return (
    <>
      <Box className="section-1">
        <Grid container spacing={2} columns={16} sx={{ overflow: "hidden" }}>
          <Grid item xl={8} className="section-1-left">
            <Fancybox
              // Sample options
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <Carousel
                // Sample options
                options={{ infinite: false }}
              >
                {imageProduct.map((image: any, index: number) => {
                  console.log(`render`);
                  return (
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
                  );
                })}
              </Carousel>
            </Fancybox>
          </Grid>
          <Grid item xl={8} className="section-1-right">
            <Box className="content">
              <h4>{productDetails.name}</h4>
              <span>
                Mã sản phẩm:
                <span className="product-code">
                  {productDetails.code_product}
                </span>
              </span>
              <span>Thiết kế độc quyền từ Hàn Quốc</span>
              <span className="price">
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
              <Link href="/">Hướng dẫn chọn size</Link>
              <div className="product-policy">
                <div className="product-policy-item">
                  <ReplyAllIcon />
                  <span>Đổi miễn phí trong 72 giờ</span>
                </div>
                <div className="product-policy-item">
                  <WorkspacePremiumIcon />
                  <span>Bảo hành trọn đời</span>
                </div>
                <div className="product-policy-item">
                  <LocalAtmIcon />
                  <span>Trả góp 0%</span>
                </div>
                <div className="product-policy-item">
                  <LocalShippingIcon />
                  <span>Miễn phí giao hàng toàn quốc</span>
                </div>
              </div>
              <ButtonSearchShop startIcon={<LocationOnIcon />} color="primary">
                TÌM CỬA HÀNG GẦN BẠN
              </ButtonSearchShop>
              <ButtonBuyNow variant="contained" color="primary">
                MUA NGAY
              </ButtonBuyNow>
              <div className="help">
                <span>Cần giúp đỡ?</span>
                <span>Phone: 1900 544 544</span>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Section2 imageProduct={imageProduct} />
    </>
  );
};
const Section2 = (props: any) => {
  const { imageProduct } = props;
  const [active, setActive] = useState<number>(0);

  return (
    <Box className="section-2">
      <Box
        sx={{
          display: `flex`,
          flexDirection: "column",
          alignItems: "center",
          //   gap: 30,
          "& > *": {
            m: 1,
          },
          marginTop: "100px",
        }}
        className="tab-link"
      >
        <ButtonGroup
          className="button-group"
          //   sx={{ fontWeight: 600 }}
          variant="text"

          //   aria-label="Basic button group"
        >
          <ButtonTabLink
            onClick={() => {
              setActive(0);
            }}
            className="button-tab-link"
          >
            Chi tiết sản phẩm
          </ButtonTabLink>
          <ButtonTabLink
            onClick={() => {
              setActive(1);
            }}
            className="button-tab-link"
          >
            Chính sách bảo hành
          </ButtonTabLink>
          <ButtonTabLink
            onClick={() => {
              setActive(2);
            }}
            className="button-tab-link"
          >
            Chính sách thu đổi
          </ButtonTabLink>
        </ButtonGroup>
      </Box>
      <Box
        className="image-product-details"
        sx={{
          display: `${active === 0 ? "flex" : "none"}`,
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        {imageProduct.map((image: any, index: number) => {
          return (
            <Image
              alt="image-details"
              key={`image-detais-${index}`}
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${image.src}`}
              width="888"
              height="888"
              style={{
                maxWidth: "100%",
                objectFit: "cover",
              }}
            />
          );
        })}
      </Box>
      <WarrantyPolicy active={active} />
      <ExchangePolicy active={active} />
      {/* <Box
        sx={{
          display: `${active === 2 ? "flex" : "none"}`,
          backgroundColor: "red",
        }}
      >
        Chính sách thu đổi
      </Box> */}
    </Box>
  );
};

export default ProductDetail;
