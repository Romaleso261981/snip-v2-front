"use client";
import InstagramIcon from "@/assets/icons/instagram.svg";
import YouTubeIcon from "@/assets/icons/youtube.svg";
import TiktokIcon from "@/assets/icons/tiktok.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";

import { Link } from "@/i18n/routing";

const SocialMedia = () => {
  return (
    <ul className="flex gap-2 mt-5 text-dark text-sm items-start md:mt-6">
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
