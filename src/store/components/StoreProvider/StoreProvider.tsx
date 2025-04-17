"use client";

import { FC, ReactNode, useRef } from "react";
import { Provider } from "react-redux";

import { AppStore, makeStore } from "@/store";

interface IProps {
  children: ReactNode;
}

const StoreProvider: FC<IProps> = ({ children }) => {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
