import { INotificationData, IUserMenuData } from "./types";

import Image1 from "@/assets/icons/temporaryPng/image1.png";

import AccountIcon from "@/assets/icons/userMenu/Account.svg";
import BagIcon from "@/assets/icons/userMenu/Bag.svg";
import CardIcon from "@/assets/icons/userMenu/Card.svg";
import SettingsIcon from "@/assets/icons/userMenu/Settings.svg";

export const userMenuData: IUserMenuData[] = [
  { id: "Профиль", text: "Профиль", icon: AccountIcon },
  { id: "Мои товары", text: "Мои товары", icon: BagIcon },
  { id: "Финансы", text: "Финансы", icon: CardIcon },
  { id: "Настройки", text: "Настройки", icon: SettingsIcon },
];

export const userNotificationData: INotificationData[] = [
  {
    id: "1",
    text: "Вы купили “☑️170 ГЕМОВ BRAWL STARS на твой аккаунт☑️”",
    timeAgo: "1",
    image: Image1.src,
  },
  {
    id: "2",
    text: "Пополнение счета на 5000 RUB",
    timeAgo: "13",
  },
  {
    id: "3",
    text: "Вывод 2000 RUB со счета",
    timeAgo: "60",
  },
  {
    id: "4",
    text: "Новое сообщение от:",
    timeAgo: "300",
    user: {
      name: "Леша33",
    },
  },
  {
    id: "5",
    text: "купил “360 гемов быстро 💎💎💎”",
    timeAgo: "300",
    otherUser: {
      name: "Jerome Bell",
      img: Image1.src,
    },
    image: Image1.src,
  },
  {
    id: "6",
    text: "Новое сообщение от:",
    timeAgo: "300",
    user: {
      name: "Леша33",
    },
  },
  {
    id: "7",
    text: "купил “360 гемов быстро 💎💎💎”",
    timeAgo: "300",
    otherUser: {
      name: "Jerome Bell",
      img: Image1.src,
    },
    image: Image1.src,
  },
];
