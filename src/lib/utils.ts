import { config } from "@/config";

import { buildWispClient } from "@wisp-cms/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { PagePathParam } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const wisp = buildWispClient({
  blogId: config.wisp.blogId
});

export function calculateTotalPages(totalItems: number, itemsPerPage: number): number {
  return Math.ceil(totalItems / itemsPerPage);
}

export function toPagination(page: number, itemsPerPage: number, totalPages: number) {
  return {
    page: page,
    limit: itemsPerPage,
    totalPages: totalPages,
    nextPage: page !== totalPages ? page + 1 : null,
    prevPage: page > 1 ? page - 1 : null
  }
}

export function generateStaticParamsForPagnination(totalItems: number, itemsPerPage: number): PagePathParam[] {
  // Calculate total number of pages
  const totalPages = calculateTotalPages(totalItems, itemsPerPage)

  // Generate an array containing all page numbers inside objects starting from 1 ({page: 1}, {page: 2}. , {page: 3} etc.)
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString()
  }));
}

export function computeIfAbsent<K, V>(map: Map<K, V>, key: K, valueProvider: () => V): V {
  if (!map.has(key)) {
    const value = valueProvider();
    map.set(key, value);
    return value;
  }
  return map.get(key)!;
}

export function toPageNumber(pageParam?: string): number {
  return pageParam ? parseInt(pageParam) : 1;
}

export function maybeAddPageIndicator(page: number): string {
  return page > 1 ? ` - Page ${page}` : "";
}

export function onPageOneOrElse<R>(page: number, onPageOne: () => R, onOtherPage: () => R): R {
  return page === 1 ? onPageOne() : onOtherPage();
}

export const replacePagePlaceholders = (page: number, textOnPageOne: () => string, textOnOtherPage: () => string): string => {
  return onPageOneOrElse(page, textOnPageOne, textOnOtherPage).replace(/__PAGE__/g, page.toString())
};