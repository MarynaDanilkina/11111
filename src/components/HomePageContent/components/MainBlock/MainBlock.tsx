"use client";

import { SWIPER_SLIDES_LIST } from "./constants";
import styles from "./MainBlock.module.scss";
import { CustomSlider } from "@/components/CustomSlider";
import useClientWindowWidth from "@/hooks/useWindowWidth";

export const MainBlock = () => {
  const windowIdth = useClientWindowWidth();

  return (
    <section className={styles.root} style={{ maxWidth: `${windowIdth}px` }}>
      <div className={styles.wrapper}>
        <CustomSlider
          slidsList={SWIPER_SLIDES_LIST}
          slidesPerView="auto"
          breakpoints={{
            0: {
              spaceBetween: 16,
              centeredSlides: true,
              centeredSlidesBounds: true,
            },
            768: {
              spaceBetween: 24,
              centeredSlides: false,
              centeredSlidesBounds: true,
            },
          }}
          className={styles.slider}
        />
      </div>
    </section>
  );
};
