import {
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from "@mui/material";
import ActiveLink from "../active.link";
import Button, { ButtonProps } from "@mui/material/Button";
import { PopupCollections } from "../popup/popup.menu";
import "~/header/header.scss";
import PopupProduct from "../popup/popup.product";
import PopupNews from "../popup/popup.news";
import PopupService from "../popup/popup.service";

const ButtonMenu = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#a51e27"),
  "&:hover": {
    backgroundColor: "inherit",
  },
}));

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: theme.typography.pxToRem(15),
    // maxWidth: "100%",
    maxWidth: "1525px",
    maxHeight: "500px",
    margin: "0px 50px",
  },
}));

export const ButtonAboutUs = () => {
  return (
    <>
      <ButtonMenu
        className="menu-button"
        sx={{
          my: 2,
          display: "block",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        <ActiveLink href="/pages">VỀ CHÚNG TÔI</ActiveLink>
      </ButtonMenu>
    </>
  );
};
export const ButtonCollections = () => {
  return (
    <>
      <HtmlTooltip
        title={
          <>
            <PopupCollections />
          </>
        }
      >
        <ButtonMenu
          className="menu-button"
          sx={{
            my: 2,
            display: "block",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          <ActiveLink href="/collections/all" legacyBehavior>
            <a className="button">BỘ SƯU TẬP</a>
          </ActiveLink>
        </ButtonMenu>
      </HtmlTooltip>
    </>
  );
};

export const ButtonProduct = () => {
  return (
    <>
      <HtmlTooltip
        title={
          <>
            <PopupProduct />
          </>
        }
      >
        <ButtonMenu
          className="menu-button"
          sx={{
            my: 2,
            display: "block",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          <ActiveLink
            href="/collections/tat-ca-san-pham-huy-thanh"
            legacyBehavior
          >
            <a className="button">SẢN PHẨM </a>
          </ActiveLink>
        </ButtonMenu>
      </HtmlTooltip>
    </>
  );
};

export const ButtonLabGrown = () => {
  return (
    <>
      <ButtonMenu
        className="menu-button"
        sx={{
          my: 2,
          display: "block",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        <ActiveLink href="/pages/nhan-cau-hon-lab-grown-diamond" legacyBehavior>
          <a className="button">NHẪN CẦU HÔN LAB-GROWN DIAMOND</a>
        </ActiveLink>
      </ButtonMenu>
    </>
  );
};

export const ButtonNews = () => {
  return (
    <>
      <HtmlTooltip
        title={
          <>
            <PopupNews />
          </>
        }
      >
        <ButtonMenu
          className="menu-button"
          sx={{
            my: 2,
            display: "block",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          <ActiveLink href="/blogs/news" legacyBehavior>
            <a className="button">TIN TỨC</a>
          </ActiveLink>
        </ButtonMenu>
      </HtmlTooltip>
    </>
  );
};

export const ButtonServices = () => {
  return (
    <>
      <HtmlTooltip
        title={
          <>
            <PopupService />
          </>
        }
      >
        <ButtonMenu
          className="menu-button"
          sx={{
            my: 2,
            display: "block",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          <ActiveLink href="/pages/service" legacyBehavior>
            <a className="button">DỊCH VỤ</a>
          </ActiveLink>
        </ButtonMenu>
      </HtmlTooltip>
    </>
  );
};

export const ButtonGoldPrice = () => {
  return (
    <>
      <ButtonMenu
        className="menu-button"
        sx={{
          my: 2,
          display: "block",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        <ActiveLink href="/pages/bang-gia-vang" legacyBehavior>
          <a className="button">GIÁ VÀNG HÔM NAY</a>
        </ActiveLink>
      </ButtonMenu>
    </>
  );
};
