import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function transformNumber(index: number): string {
	const letters = ["A", "B", "C", "D", "E"];
	return letters[index] || "";
}
