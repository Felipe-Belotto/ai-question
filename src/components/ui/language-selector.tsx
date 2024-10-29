"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function LanguageSelector({
	onLanguageChange,
	currentLanguage,
}: {
	onLanguageChange: (language: string) => void;
	currentLanguage: string;
}) {
	return (
		<Select value={currentLanguage} onValueChange={onLanguageChange}>
			<SelectTrigger className="w-[100px]">
				<SelectValue placeholder="Language" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="en">English</SelectItem>
				<SelectItem value="es">Español</SelectItem>
				<SelectItem value="pt">Português</SelectItem>
			</SelectContent>
		</Select>
	);
}

// Wrapper component for client-side functionality
export function LanguageSelectorWrapper() {
	const [currentLanguage, setCurrentLanguage] = useState("en");
	return (
		<LanguageSelector
			currentLanguage={currentLanguage}
			onLanguageChange={setCurrentLanguage}
		/>
	);
}
