import type { ReactNode } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const outsideReference = React.useRef(null);

  const handleCloseOnOverlay = (handle: React.MouseEvent<HTMLElement>): void => {
    if (handle.target === outsideReference.current) {
      onClose();
    }
  };

  return isOpen ? (
    <div className={"modal"}>
      <div ref={outsideReference} className={"modal__overlay"} onClick={handleCloseOnOverlay} />
      <div className={"modal__box"}>
        <button className={"modal__close"} onClick={onClose}>
          <FontAwesomeIcon icon={faXmark as IconProp} />
        </button>
        {children}
      </div>
    </div>
  ) : null;
}
