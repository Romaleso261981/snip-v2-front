"use client";
import InstagramIcon from "@/assets/icons/footer/InstagramIcon.svg";
import YouTubeIcon from "@/assets/icons/footer/YoutubeIcon.svg";
import TiktokIcon from "@/assets/icons/footer/TiktokIcon.svg";
import FacebookIcon from "@/assets/icons/footer/FacebookIcon.svg";

import { Link } from "@/i18n/routing";

const SocialMedia = () => {
  return (
    <ul className="flex gap-2 mt-5 text-dark text-[14px] items-start md:mt-6">
      <li>
        <Link href="https://instagram.com">
          <InstagramIcon className="w-8 h-8" />
        </Link>
      </li>
      <li>
        <Link href="https://youTube.com">
          <YouTubeIcon className="w-8 h-8" />
        </Link>
      </li>
      <li>
        <Link href="https://tiktok.com">
          <TiktokIcon className="w-8 h-8" />
        </Link>
      </li>
      <li>
        <Link href="https://facebook.org">
          <FacebookIcon className="w-8 h-8" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
