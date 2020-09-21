import { nanoid } from "nanoid";

// images
import food1 from "assets/customer/landing/food1.webp";
import food2 from "assets/customer/landing/food2.webp";

export const LANDING_FOOD_OFFERS = [
  {
    id: nanoid(),
    image: food1,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt id diam non consectetur. Quisque pretium est sed sapien ultricies.",
    alternate: false,
  },
  {
    id: nanoid(),
    image: food2,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt id diam non consectetur. Quisque pretium est sed sapien ultricies.",
    alternate: true,
  },
];
