"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "~/footer/footer.scss";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import DeliveryFooter from "./delivery.footer";

const AppFooter = () => {
  const [display, setDisplay] = useState("none");

  // display arrow on top
  const listenScrollEvent = () => {
    if (window.scrollY <= 800) {
      setDisplay("none");
    } else if (window.scrollY >= 800) {
      setDisplay("block");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  // Click op top
  const handleScrollOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          flexGrow: 1,
          borderTop: "1px solid #ccc",
          padding: "20px 30px",
          margin: "50px 30px",
        }}
      >
        <Grid container spacing={2} columns={12}>
          <Grid item xl={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "30px",
                marginTop: "10px",
              }}
            >
              <PhoneIcon
                sx={{
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  padding: "6px",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <h4>GỌI MUA HÀNG (Phím 1) (8:00 - 21:00)</h4>
                <span>1900 567 789</span>
                <span>Tất cả các ngày trong tuần</span>
              </div>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <PhoneIcon
                sx={{
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  padding: "6px",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <h4>GÓP Ý, KHIẾU NẠI (Phím 3) (8:00 - 21:00)</h4>
                <span>1900 567 999</span>
                <span>Tất cả các ngày trong tuần</span>
              </div>
            </Box>
          </Grid>
          <Grid item xl={4}>
            <span>HỆ THỐNG SHOW ROOM</span>
            <Image
              alt="he-thong-show-room"
              src="/assets/ft_showroom_image_custom.webp"
              width={400}
              height={200}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                margin: "10px 0px",
              }}
            />
            <a style={{ textDecoration: "underline", color: "#ccc" }}>
              Xem địa chỉ hệ thống showroom
            </a>
          </Grid>
          <Grid item xl={4}>
            <span>FANPAGE CỦA CHÚNG TÔI</span>
            <Image
              alt="he-thong-show-room"
              src="/assets/footer-fanpage-custom-image.webp"
              width={400}
              height={200}
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                margin: "10px 0px",
              }}
            />
            <div
              className="icon-social-media"
              style={{ display: "flex", gap: "25px", alignItems: "center" }}
            >
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <img
                style={{ height: "18px", width: "18px" }}
                className="icon-tiktok"
                src="/assets/zalo-logo.webp"
              />
              <img
                style={{ height: "18px", width: "18px" }}
                className="icon-zalo"
                src="/assets/tiktok-logo.webp"
              />
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box
        className="footer-desc"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 2,
          margin: "0px 60px",
          paddingBottom: "75px",
        }}
      >
        <h3>CÔNG TY TNHH VÀNG BẠC ĐÁ QUÝ HUY THÀNH</h3>
        <span>
          Trụ sở chính: Số 23/100 ( số cũ: Số 30A, ngõ 8), phố Đội Cấn, Phường
          Đội Cấn, Quận Ba Đình, Thành phố Hà Nội, Việt Nam.
        </span>
        <span>
          Điện thoại: 0437220777 - Fax: 0437338656 - Email: cskh@htj.vn
        </span>
        <span>
          Giấy chứng nhận đăng ký doanh nghiệp: 0101892596 do Sở Kế hoạch & Đầu
          tư TP. Hà Nội cấp lần đầu ngày 02/03/2006.
        </span>
        <img
          style={{ height: "45px", width: "125px" }}
          className="icon-zalo"
          src="/assets/ft_certi_img1_custom.webp"
        />
      </Box>
      <ArrowUpwardOutlinedIcon
        onClick={() => handleScrollOnTop()}
        sx={{
          display: { display }, // set state
          color: "white",
          backgroundColor: "#FAB5B5",
          cursor: "pointer",
          bottom: "160px",
          right: "34px",
          height: " 40px",
          width: "40px",
          zIndex: 9999999,
          lineHeight: "40px",
          opacity: 0.6,
          position: "fixed",
        }}
      />
      <DeliveryFooter />
    </Container>
  );
};
export default AppFooter;
