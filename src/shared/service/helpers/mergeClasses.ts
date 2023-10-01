import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge classes using clsx and tailwind-merge for enhanced flexibility.
 * @param inputs - Class values to be merged.
 * @returns The merged class string.
 */
export const mergeClasses = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
