"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isShowHide, setIsShowHide] = useState(false);
  const [idProduct, setIdProduct] = useState("");
  return (
    <ThemeContext.Provider
      value={{ isShowHide, setIsShowHide, idProduct, setIdProduct }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
