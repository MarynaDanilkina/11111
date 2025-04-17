"use client";

import classNames from "classnames";
import Image from "next/image";
import { useRef, useState } from "react";

import styles from "./CustomDropdownForNotification.module.scss";
import { CustomCaption } from "../CustomCaption";
import { CustomParagraph } from "../CustomParagraph";
import { INotificationData } from "../Header/components/UserMenu/types";
import { UserAvatar } from "../UserAvatar";
import { useClickOutside } from "@/hooks/useClickOutside";
import { getTimeAgo } from "@/utils/getTimeAgo";

import NotificationIcon from "@/assets/icons/Notification.svg";
import NotificationDotIcon from "@/assets/icons/NotificationDot.svg";
import SeparatorIcon from "@/assets/icons/SeparatorNotification.svg";

interface DropdownProps {
  userNotificationData: INotificationData[];
  hasImage?: boolean;
}

export const CustomDropdownForNotification = ({
  userNotificationData,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside([dropdownRef, dropdownMenuRef], () => setIsOpen(false));

  const renderDropdownList = () => {
    return (
      <div
        ref={dropdownMenuRef}
        className={classNames(styles.wrapperDropdownListNotification)}
      >
        <div className={classNames(styles.dropdownListNotification)}>
          <div className={classNames(styles.notifications)}>
            <CustomCaption as="c1">
              Уведомления {`(${userNotificationData.length})`}
            </CustomCaption>
          </div>
          <SeparatorIcon />
          {userNotificationData.length === 0 && (
            <CustomParagraph
              as="b3"
              className={classNames(styles.textWithoutItems)}
            >
              Нет новых уведомлений
            </CustomParagraph>
          )}
          {userNotificationData.map((item) => (
            <div
              key={item.id}
              className={classNames(styles.wrapperItemNotification)}
            >
              {!item.user && !item.otherUser && (
                <>
                  <div className={classNames(styles.greenCircle)}></div>
                  <div className={classNames(styles.wrapperItemContent)}>
                    <div className={classNames(styles.itemContent)}>
                      <CustomCaption as="c2">{item.text}</CustomCaption>
                      <CustomParagraph as="b4">
                        {getTimeAgo(+item.timeAgo)}
                      </CustomParagraph>
                    </div>
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.id}
                        width={40}
                        height={26}
                      />
                    )}
                  </div>
                </>
              )}
              {item.user && (
                <>
                  <div className={classNames(styles.greenCircleForUser)}></div>
                  <div className={classNames(styles.wrapperItemUserContent)}>
                    <UserAvatar userName="Nix Com" radius={36} />
                    <div className={classNames(styles.itemContent)}>
                      <CustomCaption as="c2">{`${item.text} ${item.user.name}`}</CustomCaption>
                      <CustomParagraph as="b4">
                        {getTimeAgo(+item.timeAgo)}
                      </CustomParagraph>
                      <span></span>
                    </div>
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.id}
                        width={40}
                        height={26}
                      />
                    )}
                  </div>
                </>
              )}
              {item.otherUser && (
                <>
                  <div className={classNames(styles.greenCircleForUser)}></div>
                  <div className={classNames(styles.wrapperItemUserContent)}>
                    <UserAvatar userName="Nix Com" radius={36} />
                    <div className={classNames(styles.itemContent)}>
                      <CustomCaption as="c2">{`${item.otherUser.name} ${item.text}`}</CustomCaption>
                      <CustomParagraph as="b4">
                        {getTimeAgo(+item.timeAgo)}
                      </CustomParagraph>
                      <span></span>
                    </div>
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.id}
                        width={40}
                        height={26}
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      ref={dropdownRef}
      className={classNames(styles.wrapperDropdown)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <button className={classNames(styles.button)} type="button">
        <NotificationDotIcon className={classNames(styles.greenCircleMain)} />
        <NotificationIcon />
      </button>
      {isOpen && <>{renderDropdownList()}</>}
    </div>
  );
};

export default CustomDropdownForNotification;
