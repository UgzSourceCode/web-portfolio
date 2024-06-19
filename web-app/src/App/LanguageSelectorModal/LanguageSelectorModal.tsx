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

export const LanguageSelectorModal = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />

			<ModalContent>
				<ModalHeader>Wybierz języka :)</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					Loreum ipsum
					<Button>pl</Button>
					<Button>en</Button>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
