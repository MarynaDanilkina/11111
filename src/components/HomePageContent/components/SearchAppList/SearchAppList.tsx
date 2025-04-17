import Image from "next/image";
import { FC } from "react";

import styles from "./SearchAppList.module.scss";
import { CustomLink } from "@/components/CustomLink";
import { CustomParagraph } from "@/components/CustomParagraph";
import { IMainCategories } from "@/types/categories";

interface IProps {
  categoriesList: IMainCategories[];
}

export const SearchAppList: FC<IProps> = ({ categoriesList }) => {
  return (
    <div className={styles.root}>
      {categoriesList.map((item) => {
        return (
          <CustomLink key={item.id} href="/" className={styles.link}>
            <Image
              src={`https://api.nixbuy.com/${item.url}`}
              alt={item.title}
              width={80}
              height={80}
              className={styles.img}
            />
            <CustomParagraph as="b3" className={styles.title}>
              {item.title}
            </CustomParagraph>
          </CustomLink>
        );
      })}
    </div>
  );
};
