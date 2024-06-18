import Image from "next/image";
import { Box, Container } from "@mui/material";

export const PopupCollections = () => {
  return (
    <Container
      maxWidth="xl"
      className="image-product"
      style={{ display: "flex", marginBottom: "22px" }}
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
          src="/assets/ndino249mo_7__65db7c3948ed49afbc60cb0a2df551f0.webp"
          width={400}
          height={200}
          style={{
            objectFit: "contain",
            marginBottom: "25px",
          }}
        />
        <span>NHẪN CẦU HÔN 2024</span>
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
          src="/assets/nc868_1__1__5645c2afd98f4993bf2b5fcf9a09e01e.webp"
          width={400}
          height={200}
          style={{
            objectFit: "contain",
            marginBottom: "25px",
          }}
        />
        <span>NHẪN CƯỚI</span>
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
          src="/assets/ptb376_3453cc3c52af48218b317c8c60f3f510.webp"
          width={400}
          height={200}
          style={{
            objectFit: "contain",
            marginBottom: "25px",
          }}
        />
        <span>TRANG SỨC CƯỚI</span>
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
          src="/assets/ndino309ldia.webp"
          width={400}
          height={200}
          style={{
            objectFit: "contain",
            marginBottom: "25px",
          }}
        />
        <span>NHẪN KIM CƯƠNG LAB-GROWN 1 CARAT</span>
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
          src="/assets/nlf_431-441_e4513b43c10e43249475b1af2c21ec4f.webp"
          width={400}
          height={200}
          style={{
            objectFit: "contain",
            marginBottom: "25px",
          }}
        />
        <span>SUMMER COLLECTIONS</span>
      </Box>
    </Container>
  );
};
