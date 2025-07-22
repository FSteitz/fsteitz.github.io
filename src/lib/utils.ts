import { config } from "@/config";

import { buildWispClient } from "@wisp-cms/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const wisp = buildWispClient({
  blogId: config.wisp.blogId
});