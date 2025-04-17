import { ComponentType, SVGProps } from "react";

export interface IUserMenuData {
  id: string;
  text: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}

export interface INotificationData {
  id: string;
  text: string;
  timeAgo: string;
  image?: string;
  user?: {
    name: string;
    img?: string;
  };
  otherUser?: {
    name: string;
    img?: string;
  };
}
