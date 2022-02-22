import styled, { keyframes } from "styled-components";
import ReactDOM from "react-dom";
import { useRef } from "react";
import { ICONS } from "../icon/icons";
import Button from "../button/Button";
import { ButtonSize, ButtonVariant } from "../button/commons";

export interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  open: boolean;
}

export const ModalHeader = styled.div`
  margin-bottom: 2.5rem;
`;

export const ModalBody = styled.div`
  margin-bottom: 1.875rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: end;
  gap: 1.25rem;
`;

const showup = keyframes`
from {
  opacity:0
}
to {
  opacity: 1;
}
`;

const showModal = keyframes`

to {
  transform: translateY(0);
  opacity: 1;
}
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: grid;
  justify-items: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 150;
  animation: ${showup} 250ms ease-out;
`;

const StyledModal = styled.div`
  transform: translateY(-50px);
  opacity: 0;
  position: relative;
  background-color: #fff;
  max-width: 95vw;
  width: auto;
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding: 3.125rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  z-index: 160;
  animation: ${showModal} 300ms 150ms forwards;

  & > .close-button {
    position: absolute;
    right: 1.625rem;
    top: 1.4375rem;
  }
`;

const Modal = ({ open, children, onClose }: ModalProps) => {
  const modalRef = useRef(null);

  const onClickBackground = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (modalRef.current === event.target) {
      onClose();
    }
  };

  return open
    ? ReactDOM.createPortal(
        <Background ref={modalRef} onClick={onClickBackground}>
          <StyledModal>
            <Button
              className="close-button"
              icon={ICONS.XSIGN}
              variant={ButtonVariant.TEXT}
              size={ButtonSize.LARGE}
              color="#9F9F9F"
              onClick={onClose}
            />
            {children}
          </StyledModal>
        </Background>,
        document.getElementById("portal")!
      )
    : null;
};

export default Modal;
