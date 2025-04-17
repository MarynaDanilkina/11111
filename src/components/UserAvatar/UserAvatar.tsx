"use client";

import classNames from "classnames";
import Image from "next/image";

import styles from "./UserAvatar.module.scss";

interface IUserAvatar {
  userName: string;
  radius: number;
  userImg?: string;
}

export const UserAvatar = ({ userName, userImg, radius }: IUserAvatar) => {
  const getInitials = () => {
    const words = userName.split(" ");
    if (words.length >= 2) {
      return `${words[0].charAt(0)}${words[1].charAt(0)}`.toUpperCase();
    }
    return userName.charAt(0).toUpperCase();
  };

  const stringToColor = (string: string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  };

  if (!userImg) {
    return (
      <div
        className={classNames(styles.wrapper)}
        style={{
          minWidth: radius,
          width: radius,
          height: radius,
          background: stringToColor(getInitials()),
        }}
      >
        {getInitials()}
      </div>
    );
  }

  return (
    <div
      className={classNames(styles.wrapper)}
      style={{
        minWidth: radius,
        width: radius,
        height: radius,
        background: stringToColor(getInitials()),
        color: stringToColor(getInitials()),
      }}
    >
      <Image
        src={userImg}
        alt={getInitials()}
        width={radius}
        height={radius}
        className={classNames(styles.img)}
      />
    </div>
  );
};
