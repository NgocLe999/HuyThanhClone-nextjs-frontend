"use client";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import React, {
  Suspense,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Grid } from "@mui/material";
import Carousel from "~/product/fancybox-image/carousel";
import Image from "next/image";
import { sendRequest } from "~/utils/api";
import { ThemeContext } from "app/theme-provider";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useDidMount } from "~/custom-hook/custom.hook";
import Loading from "app/(guest)/loading";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "5px",
  boxShadow: 2,
  p: 4,
};

export default function PopupPreviewViewProduct(props: any) {
  //@ts-ignore
  const { isShowHide, setIsShowHide, idProduct, setIdProduct } =
    useContext(ThemeContext);
  const didMount = useDidMount();
  const handleClose = () => {
    setIsShowHide(false);
    setIdProduct("");
    setProductDetails(initState);
  };
  const [loading, setLoading] = useState(false);
  const initState = {
    _id: "",
    available: "",
    description: "",
    featured_image: {
      src: "",
    },
    handle: "",
    image: [],
    media: "",
    name: "",
    price: 0,
    price_max: 0,
    price_min: 0,
    title: "",
    type: "",
    url: "",
    code_product: "",
    material: "",
    vendor: "",
    not_allow_promotion: "",
    sole_quantity: "",
    collection: "",
    weight: "",
  };

  const [productDetails, setProductDetails] = useState<IProduct>(initState);

  const fetchProductDetail = useCallback(
    async (idProduct: string) => {
      const res = await sendRequest<IBackendRes<IProduct>>({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/product/${idProduct}`,
        method: "GET",
        nextOption: { cache: "no-store" },
      });
      if (res && res?.data) {
        setProductDetails(res?.data);
      }
    },
    [idProduct]
  );

  useEffect(() => {
    setLoading(true);
    if (idProduct !== "") {
      fetchProductDetail(idProduct);
    }
  }, [idProduct]);

  return (
    <React.Fragment>
      <Modal open={isShowHide} onClose={handleClose}>
        <ModalDetailProduct productDetails={productDetails} />
      </Modal>
    </React.Fragment>
  );
}

export const ModalDetailProduct = (props: any) => {
  const { productDetails } = props;
  console.log(`render popup`);
  return (
    <>
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
          {productDetails ? (
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
                <div className="help">
                  <span>Cần giúp đỡ?</span>
                  <span>Phone: 1900 544 544</span>
                </div>
              </Box>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </Box>
    </>
  );
};
