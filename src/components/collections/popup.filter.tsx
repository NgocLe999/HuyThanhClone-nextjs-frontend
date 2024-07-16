import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";
import { ButtonCollections } from "~/header/button/button.menu";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "~/custom-hook/useToast";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

export default function PopupFilter(props: any) {
  const { open, setOpen } = props;
  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [price, setPrice] = React.useState<number>(0);
  const [color, setColor] = React.useState("");
  const [material, setMaterial] = React.useState("");
  const [type, setType] = React.useState("");
  const router = useRouter();
  const pathname = usePathname();
  const toast = useToast();
  const handleSubmit = () => {
    setOpen(false);
    router.push(`${pathname}?price=${price}`);
    toast.success("VUI LÒNG ĐỢI TRONG GIÂY LÁT...");
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{ fontWeight: 600, color: "black" }}
              >
                KHOẢNG GIÁ
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={1000000}
                name="radio-buttons-group"
              >
                <FormControlLabel
                  onChange={(e: any) => setPrice(e.target.value)}
                  value={999999}
                  control={<Radio />}
                  label="Nhỏ hơn 1,000,000đ"
                />
                <FormControlLabel
                  onChange={(e: any) => setPrice(e.target.value)}
                  value={3000001}
                  control={<Radio />}
                  label="Từ 1,000,000đ-3,000,000đ"
                />
                <FormControlLabel
                  onChange={(e: any) => setPrice(e.target.value)}
                  value={5000001}
                  control={<Radio />}
                  label="Từ 3,000,000đ-5,000,000đ"
                />
                <FormControlLabel
                  onChange={(e: any) => setPrice(e.target.value)}
                  value={7000001}
                  control={<Radio />}
                  label="Từ 5,000,000đ-7,000,000đ"
                />
                <FormControlLabel
                  onChange={(e: any) => setPrice(e.target.value)}
                  value={10000000}
                  control={<Radio />}
                  label="Từ 7,000,000đ-10,000,000đ"
                />
                <FormControlLabel
                  onChange={(e: any) => setPrice(e.target.value)}
                  value={10000001}
                  control={<Radio />}
                  label="Lớn hơn 10,000,000đ"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{ fontWeight: 600, color: "black" }}
              >
                MÀU SẮC
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Màu vàng"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  onChange={(e: any) => setColor(e.target.value)}
                  value="Màu vàng"
                  control={<Radio />}
                  label="Màu vàng"
                />
                <FormControlLabel
                  onChange={(e: any) => setColor(e.target.value)}
                  value="Màu trắng"
                  control={<Radio />}
                  label="Màu trắng"
                />
                <FormControlLabel
                  onChange={(e: any) => setColor(e.target.value)}
                  value="Màu hồng"
                  control={<Radio />}
                  label="Màu hồng"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel
                sx={{ fontWeight: 600, color: "black" }}
                id="demo-radio-buttons-group-label"
              >
                CHẤT LIỆU
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="14k"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  onChange={(e: any) => setMaterial(e.target.value)}
                  value="10k"
                  control={<Radio />}
                  label="10k"
                />
                <FormControlLabel
                  onChange={(e: any) => setMaterial(e.target.value)}
                  value="14k"
                  control={<Radio />}
                  label="14k"
                />
                <FormControlLabel
                  onChange={(e: any) => setMaterial(e.target.value)}
                  value="18k"
                  control={<Radio />}
                  label="18k"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{ fontWeight: 600, color: "black" }}
              >
                ĐÁ
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Kim cương"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  onChange={(e: any) => setType(e.target.value)}
                  value="Kim cương"
                  control={<Radio />}
                  label="Kim cương"
                />
                <FormControlLabel
                  onChange={(e: any) => setType(e.target.value)}
                  value="Moissanite"
                  control={<Radio />}
                  label="Moissanite"
                />
                <FormControlLabel
                  onChange={(e: any) => setType(e.target.value)}
                  value="Đá Cubic Zirconia"
                  control={<Radio />}
                  label="Đá Cubic Zirconia"
                />
                <FormControlLabel
                  onChange={(e: any) => setType(e.target.value)}
                  value="Đá Màu"
                  control={<Radio />}
                  label="Đá Màu"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Button
            onClick={handleSubmit}
            // onClick={() => setOpen(false)}
            sx={{ padding: 2, marginTop: "10px", fontSize: 17 }}
            color="error"
          >
            Áp dụng
          </Button>
        </Box>
      </Modal>
    </>
  );
}
