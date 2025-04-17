import { MainBlock } from "./components/MainBlock";
import { SearchBlock } from "./components/SearchBlock";
import styles from "./HomePageContent.module.scss";
import { getMainSearchCategories } from "@/api/inde";
import { IMainCategories } from "@/types/categories";

export const HomePageContent = async () => {
  let searchList: IMainCategories[] | null = null;

  try {
    const data = await getMainSearchCategories();

    searchList = data.data.data;
  } catch {}

  return (
    <div className={styles.root}>
      <MainBlock />
      <SearchBlock categoriesList={searchList} />
    </div>
  );
};
