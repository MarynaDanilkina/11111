"use client";

import classNames from "classnames";
import { useRef, useState } from "react";

import styles from "./CustomDropdownForUserMenu.module.scss";
import { CustomButton } from "../CustomButton";
import { CustomCaption } from "../CustomCaption";
import { IUserMenuData } from "../Header/components/UserMenu/types";
import { UserAvatar } from "../UserAvatar";
import { deleteServerToken } from "@/api/inde";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useAppDispatch } from "@/store/hooks/hooks";
import { setIsUserAuth } from "@/store/slices/auth/isUserAuthSlice";

import DropdownIcon from "@/assets/icons/Dropdown.svg";
import SeparatorIcon from "@/assets/icons/Separator.svg";
import LogoutIcon from "@/assets/icons/userMenu/Logout.svg";

interface DropdownProps {
  userName: string | undefined;
  userAvatar?: string | undefined;
  userMenuData: IUserMenuData[];
}

export const CustomDropdownForUserMenu = ({
  userName,
  userAvatar,
  userMenuData,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const logoutHandler = async () => {
    try {
      await deleteServerToken();

      dispatch(setIsUserAuth(false));
    } catch (error) {
      console.error(error);
    }
  };

  useClickOutside([dropdownRef, dropdownMenuRef], () => setIsOpen(false));

  return (
    <div
      ref={dropdownRef}
      className={classNames(styles.wrapperDropdown)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <button className={classNames(styles.button)} type="button">
        <UserAvatar userImg={userAvatar} userName="Nix Com" radius={36} />
        <CustomCaption as="c1">{userName}</CustomCaption>
        <DropdownIcon
          className={classNames(styles.logo, { [styles.open]: isOpen })}
        />
      </button>
      {isOpen && (
        <div
          ref={dropdownMenuRef}
          className={classNames(styles.wrapperDropdownList)}
        >
          <div className={classNames(styles.dropdownList)}>
            {userMenuData.map((item) => (
                <CustomButton
                  theme="withoutStyles"
                  key={item.id}
                  className={classNames(styles.dropdownItem)}
                  onClick={item.onClick}
                >
                  {item.icon && <item.icon />}
                  <CustomCaption
                    className={classNames(styles.hoverItem)}
                    as="c1"
                  >
                    {item.text}
                  </CustomCaption>
                </CustomButton>
            ))}
            <SeparatorIcon className={classNames(styles.separatorIcon)} />
            <CustomButton
              theme="withoutStyles"
              className={classNames(styles.dropdownItem)}
              onClick={logoutHandler}
            >
              <LogoutIcon />
              <CustomCaption className={classNames(styles.hoverItem)} as="c1">
                Выход
              </CustomCaption>
            </CustomButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdownForUserMenu;
