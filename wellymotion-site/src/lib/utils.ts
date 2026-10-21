import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export const cn = (...items: ClassValue[]) => twMerge(clsx(items));
