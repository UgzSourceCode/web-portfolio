import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useLanguageSelector } from "./useLanguageSelector.ts";
import { useTranslation } from "react-i18next";

export const LanguageSelectorModal = () => {
	const { t } = useTranslation();
	const { getLanguagesCollection, setLanguage } = useLanguageSelector();
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />

			<ModalContent>
				<ModalHeader>{t("selectLanguageModal.title")}:</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					{getLanguagesCollection().map((language) => (
						<Button
							variant="clear"
							key={language.ShortName}
							onClick={() => {
								setLanguage(language.ShortName);
								setIsOpen(false);
							}}
						>
							{language.Name}
						</Button>
					))}
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
