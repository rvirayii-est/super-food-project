import { nanoid } from "nanoid";

// icons
import truckFastOutline from "@iconify/icons-mdi/truck-fast-outline";
import clockSolid from "@iconify/icons-clarity/clock-solid";
import bxsHomeHeart from "@iconify/icons-bx/bxs-home-heart";
import multipleUsers from "@iconify/icons-gridicons/multiple-users";

export const OFFERS = [
  {
    id: nanoid(),
    icon: truckFastOutline,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi neque",
  },
  {
    id: nanoid(),
    icon: clockSolid,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi neque",
  },
  {
    id: nanoid(),
    icon: bxsHomeHeart,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi neque",
  },
  {
    id: nanoid(),
    icon: multipleUsers,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi neque",
  },
];
