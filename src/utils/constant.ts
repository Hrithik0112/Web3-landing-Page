export const routes = {
    home: "",
    about: "about",
    collection: "collections",
    faq: "faq",
    popular: "popular",
    features: "features",
    promo: "promotion",
    footer: "footer",
};

export const appLinks = Object.values(routes).map((r) => r);

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
