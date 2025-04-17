import { FeedbackSlide } from "../FeedbackSlide";
import { TelegramSlide } from "../TelegramSlide";
import { YouTubeSlide } from "../YouTubeSlide";
import { ISwiperSlidesList } from "@/types/swiper";

export const SWIPER_SLIDES_LIST: ISwiperSlidesList[] = [
    {
        id: 'main_telegram_slide',
        node: <TelegramSlide />
    },
    {
        id: 'main_youTube_slide',
        node: <YouTubeSlide />
    },
    {
        id: 'main_feedback_slide',
        node: <FeedbackSlide />
    }
]