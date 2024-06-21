import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Box, Container } from "@mui/material";
const DeliveryFooter = () => {
  return (
    <Box
      // maxWidth="xl"
      className="delivery-footer"
      sx={{
        maxWidth: "1489px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>GIAO HÀNG TRONG 2H - MIỄN PHÍ</span>
      <LocalShippingOutlinedIcon />
    </Box>
  );
};
export default DeliveryFooter;
