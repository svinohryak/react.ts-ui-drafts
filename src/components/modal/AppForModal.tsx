import { useState } from "react";
import Button, {
  ButtonColorSchemeType,
  ButtonSize,
  ButtonVariant
} from "./components/button/Button";
import { ICONS } from "./components/icon/icons";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader
} from "./components/modal/Modal";
import { Header2 } from "./components/typography/Typography";

function App() {
  const [isModal, setIsModal] = useState(false);
  const onClose = () => {
    setIsModal(false);
  };

  return (
    <div>
      <Button
        icon={ICONS.BELL}
        size={ButtonSize.LARGE}
        onClick={() => setIsModal(true)}
      >
        Open Modal
      </Button>

      <Modal open={isModal} onClose={() => setIsModal(false)}>
        <ModalHeader>
          <Header2>Test Title</Header2>
        </ModalHeader>
        <ModalBody>
          <div style={{ width: "300px" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, magnam
            exercitationem vel dolorem, voluptas sint beatae voluptatem illo,
            doloribus vero facilis libero. Perferendis consequatur earum quam
            unde nemo, iure voluptatem.
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={onClose}
            buttonColor={ButtonColorSchemeType.NEUTRAL}
            size={ButtonSize.MEDIUM}
            variant={ButtonVariant.TEXT}
          >
            Закрыть
          </Button>
          <Button size={ButtonSize.MEDIUM} variant={ButtonVariant.SOLID}>
            Добавить
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
