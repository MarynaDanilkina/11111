import classNames from "classnames";
import { FC } from "react";

import { ITab } from "./types";
import { CustomButton } from "../CustomButton";
import styles from "./CustomTabs.module.scss";

interface IProps {
  tabs: ITab[];
  activeTab: string;
  setActiveTabHandler: (value: string) => void;
}

export const CustomTabs: FC<IProps> = ({
  tabs,
  activeTab,
  setActiveTabHandler,
}) => {
  return (
    <div className={styles.root}>
      {tabs.map((item) => {
        return (
          <CustomButton
            key={item.id}
            className={classNames(styles.btn, {
              [styles.activeBtn]: activeTab === item.id,
            })}
            onClick={() => setActiveTabHandler(item.id)}
          >
            {item.name}
          </CustomButton>
        );
      })}
    </div>
  );
};
