import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

export default function PopupSortBy(props: any) {
  const { openSortBy, setOpenSortBy } = props;
  const handleOpen = () => setOpenSortBy(true);
  const handleClose = () => setOpenSortBy(false);

  return (
    <div>
      <Modal
        open={openSortBy}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormControl>
            <FormLabel
              sx={{ fontWeight: 600, color: "black" }}
              id="demo-radio-buttons-group-label"
            >
              SẮP XẾP THEO
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Tùy chọn"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="A-Z"
                control={<Radio />}
                label="Theo bảng chữ cái từ A-Z"
              />
              <FormControlLabel
                value="T-C"
                control={<Radio />}
                label="Giá từ thấp đến cao"
              />
              <FormControlLabel
                value="C-T"
                control={<Radio />}
                label="Giá từ cao đến thấp"
              />
            </RadioGroup>
          </FormControl>
          <Button
            onClick={() => setOpenSortBy(false)}
            sx={{ padding: 2, marginTop: "10px", fontSize: 17 }}
            color="error"
          >
            Áp dụng
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
