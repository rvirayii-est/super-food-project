import { nanoid } from "nanoid";

// icons
import bxlFacebookSquare from "@iconify/icons-bx/bxl-facebook-square";
import bxlTwitter from "@iconify/icons-bx/bxl-twitter";
import bxlInstagram from "@iconify/icons-bx/bxl-instagram";
import bxlYoutube from "@iconify/icons-bx/bxl-youtube";
import bxlGoogle from "@iconify/icons-bx/bxl-google";

export const LANDING_SOCIAL_MEDIA = [
  {
    id: nanoid(),
    name: "Facebook",
    link: "www.facebook.com/foodkart",
    icon: bxlFacebookSquare,
  },
  {
    id: nanoid(),
    name: "Twitter",
    link: "www.twitter.com/foodkart",
    icon: bxlTwitter,
  },
  {
    id: nanoid(),
    name: "Instagram",
    link: "www.instagram.com/foodkart",
    icon: bxlInstagram,
  },
  {
    id: nanoid(),
    name: "Youtube",
    link: "www.youtube.com/foodkart",
    icon: bxlYoutube,
  },
  {
    id: nanoid(),
    name: "Google",
    link: "www.google.com/foodkart",
    icon: bxlGoogle,
  },
];
