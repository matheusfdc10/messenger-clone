'use client'

import Image from "next/image";
import Modal from "../Modal";

interface ImageModalProps {
    isOpen?: boolean;
    onClose: () => void;
    src?: string | null
}

const ImageModal: React.FC<ImageModalProps> = ({
    isOpen,
    onClose,
    src
}) => {
    if (!src) {
        return null;
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} image>
            <Image
                alt="Image"
                className="object-cover max-h-[86vh] w-full"
                width={960}
                height={960}
                src={src}
            />
        </Modal>
    )
}

export default ImageModal;