import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckIcon from "@mui/icons-material/Check";
import { useAppDispatch, useAppSelector } from "~/lib/redux/hooks";
import { checkoutOrder } from "~/lib/redux/slice/cartDrawerSlice";
import { sendRequest } from "~/utils/api";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

// type Inputs = {
//   example: string;
//   exampleRequired: string;
// };

export default function AddressForm(props: any) {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.cart);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IStateInfo>();
  const [color, setColor] = React.useState("warning");
  const createCustomer = async (state: IState) => {
    const idProductOrdered = state.data.map((product) => product._id);
    const res = await sendRequest<IBackendRes<ICustomer>>({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/customers`,
      method: "POST",
      body: {
        name: state.infoOrder.fullName,
        address: state.infoOrder.address,
        email: state.infoOrder.email,
        phone: state.infoOrder.phone,
        product_order: idProductOrdered,
        quantity: state.data.length,
        total: state.totalPay,
        note: state.note,
      },
      nextOption: { cache: "no-store" },
    });
    const customer = res?.data ?? [];
    return customer;
  };

  const onSubmit: SubmitHandler<IStateInfo> = async (data) => {
    setColor("success");
    dispatch(checkoutOrder(data));
    if (state.isFetching === true) {
      await createCustomer(state);
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGrid item xs={12}>
        <FormLabel htmlFor="Name" required>
          Họ và Tên
        </FormLabel>
        <OutlinedInput
          placeholder=""
          autoComplete="shipping address-line1"
          required
          {...register("fullName")}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address" required>
          Địa chỉ
        </FormLabel>
        <OutlinedInput
          placeholder=""
          autoComplete="shipping address-line1"
          required
          {...register("address")}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="phone" required>
          Số điện thoại
        </FormLabel>
        <OutlinedInput
          placeholder=""
          autoComplete="shipping address-line1"
          required
          {...register("phone")}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="email" required>
          Email
        </FormLabel>
        <OutlinedInput
          placeholder=""
          autoComplete="shipping address-line1"
          required
          {...register("email")}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="note" required>
          Ghi chú cho shipper
        </FormLabel>
        <OutlinedInput
          placeholder=""
          autoComplete="shipping address-line1"
          required
          {...register("note")}
        />
      </FormGrid>
      <Button
        type="submit"
        variant="contained"
        //@ts-ignore
        color={color}
        endIcon={color === "warning" ? "" : <CheckCircleOutlineIcon />}
        sx={{
          width: { xs: "100%", sm: "fit-content" },
          "&:hover": {
            backgroundColor: "#51BC51;",
            color: "black",
            fontWeight: 600,
          },
        }}
      >
        Xác nhận thông tin đã chính xác!
      </Button>
    </form>
  );
}
