"use client";

import classNames from "classnames";

import { userMenuData, userNotificationData } from "./constants";
import styles from "./UserMenu.module.scss";
import { CustomDropdownForNotification } from "@/components/CustomDropdownForNotification";
import CustomDropdownForUserMenu from "@/components/CustomDropdownForUserMenu/CustomDropdownForUserMenu";
import { useAppSelector } from "@/store/hooks/hooks";
import { selectUser } from "@/store/slices/user/userSlice";

export const UserMenu = () => {
  const user = useAppSelector(selectUser);
  return (
    <div className={classNames(styles.wrapper)}>
      <CustomDropdownForUserMenu
        userAvatar={user?.avatar}
        userName={user?.name}
        userMenuData={userMenuData}
      />
      <CustomDropdownForNotification
        userNotificationData={userNotificationData}
        hasImage
      />
    </div>
  );
};
