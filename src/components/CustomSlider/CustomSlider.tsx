"use client";

import classNames from "classnames";
import dynamic from "next/dynamic";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import styles from "./CustomSlider.module.scss";
import { ISwiperSlidesList } from "@/types/swiper";

import "swiper/css";

interface IProps {
  slidsList: ISwiperSlidesList[];
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  breakpoints?: SwiperOptions["breakpoints"];
  className?: string;
  sliderClassName?: string;
}

const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});

export const CustomSlider: FC<IProps> = ({
  slidsList,
  slidesPerView,
  spaceBetween,
  breakpoints,
  className,
  sliderClassName,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        className={classNames(styles.customSlider, sliderClassName)}
        // wrapperClass={styles.wrapperCustomSlider}
      >
        {slidsList.map((item) => {
          return (
            <SwiperSlide key={item.id} className={styles.customSlide}>
              {item.node}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
