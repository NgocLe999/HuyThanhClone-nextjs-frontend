import { Box, Container } from "@mui/material";
import Image from "next/image";

const PopupService = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        className="image-product"
        style={{
          display: "flex",
          marginBottom: "22px",
          marginTop: "22px",
        }}
      >
        <Box
          className="image-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            className="image"
            alt="he-thong-show-room"
            src="/assets/img_service_1.webp"
            width={315}
            height={315}
            style={{
              objectFit: "contain",
              marginBottom: "25px",
            }}
          />
          <span>KHÁCH HÀNG THÂN THIẾT</span>
        </Box>
        <Box
          className="image-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 30px",
          }}
        >
          <Image
            className="image"
            alt="he-thong-show-room"
            src="/assets/img_service_2.webp"
            width={315}
            height={315}
            style={{
              objectFit: "contain",
              marginBottom: "25px",
            }}
          />
          <span>CHÍNH SÁCH BẢO HÀNH</span>
        </Box>
        <Box
          className="image-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 30px",
          }}
        >
          <Image
            className="image"
            alt="he-thong-show-room"
            src="/assets/img_service_3.webp"
            width={315}
            height={315}
            style={{
              objectFit: "contain",
              marginBottom: "25px",
            }}
          />
          <span>CHÍNH SÁCH THU ĐỔI</span>
        </Box>
        <Box
          className="image-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 30px",
          }}
        >
          <Image
            className="image"
            alt="he-thong-show-room"
            src="/assets/img_service_4.webp"
            width={315}
            height={315}
            style={{
              objectFit: "contain",
              marginBottom: "25px",
            }}
          />
          <span>CHÍNH SÁCH GIAO HÀNG</span>
        </Box>
      </Container>
    </>
  );
};
export default PopupService;
