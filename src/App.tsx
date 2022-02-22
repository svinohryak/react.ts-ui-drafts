import Button, {
  ButtonColorSchemeType,
  ButtonSize,
  ButtonVariant
} from "./components/button/Button";
import { Icon } from "./components/icon/Icon";
// import Modal, { ModalSize } from "./components/modal/Modal";
// import Icon from "./components/icon/Icon";

// import ButtonWithIcon from "./components/button/ButtonWithIcon";
// import SvgIcon from "./components/icon/SvgIcon";

function App() {
  return (
    <div>
      <Icon name="XSIGN" size="2rem" color="royalblue" />
      <Icon name="XSIGN" size="2rem" />
      <Icon name="BELL" size="4rem" />
      <Icon name="EYE_OFF" size="2rem" />
      <h2>Buttons</h2>
      <Button icon="CIRCLE" size={ButtonSize.LARGE}>
        Big Button
      </Button>
      <Button icon="CIRCLE" variant={ButtonVariant.SOLID}>
        Medium
      </Button>
      <Button reverse icon="CART" color="white" size={ButtonSize.SMALL}>
        Small Reversed
      </Button>
      <h3>Default Button</h3>
      <Button>Simple Button</Button>
      <h3>Neutral Style Buttons</h3>
      <Button
        variant={ButtonVariant.SOLID}
        buttonColor={ButtonColorSchemeType.NEUTRAL}
        icon="HELP_CIRCLE"
      >
        Solid
      </Button>
      <Button
        variant={ButtonVariant.GHOST}
        buttonColor={ButtonColorSchemeType.NEUTRAL}
      >
        Ghost
      </Button>
      <Button
        variant={ButtonVariant.TEXT}
        buttonColor={ButtonColorSchemeType.NEUTRAL}
        icon="BELL"
      >
        Text
      </Button>
      <h3>Default Style Buttons = Solid</h3>
      <Button variant={ButtonVariant.SOLID} icon="HELP_CIRCLE">
        Solid
      </Button>
      <Button variant={ButtonVariant.GHOST}>Ghost</Button>
      <Button variant={ButtonVariant.TEXT} icon="BELL">
        Text
      </Button>
      <h3>PRIMARY</h3>
      <Button
        variant={ButtonVariant.SOLID}
        buttonColor={ButtonColorSchemeType.PRIMARY}
        icon="HELP_CIRCLE"
      >
        Solid
      </Button>
      <Button
        variant={ButtonVariant.GHOST}
        buttonColor={ButtonColorSchemeType.PRIMARY}
      >
        Ghost
      </Button>
      <Button
        variant={ButtonVariant.TEXT}
        buttonColor={ButtonColorSchemeType.PRIMARY}
        icon="BELL"
      >
        Text
      </Button>
      <h3>SUCCESS</h3>
      <Button
        variant={ButtonVariant.SOLID}
        buttonColor={ButtonColorSchemeType.SUCCESS}
        icon="HELP_CIRCLE"
      >
        Solid
      </Button>
      <Button
        variant={ButtonVariant.GHOST}
        buttonColor={ButtonColorSchemeType.SUCCESS}
      >
        Ghost
      </Button>
      <Button
        variant={ButtonVariant.TEXT}
        buttonColor={ButtonColorSchemeType.SUCCESS}
        icon="BELL"
      >
        Text
      </Button>
      <h3>DANGER</h3>
      <Button
        variant={ButtonVariant.SOLID}
        buttonColor={ButtonColorSchemeType.DANGER}
        icon="HELP_CIRCLE"
      >
        Solid
      </Button>
      <Button
        variant={ButtonVariant.GHOST}
        buttonColor={ButtonColorSchemeType.DANGER}
      >
        Ghost
      </Button>
      <Button
        variant={ButtonVariant.TEXT}
        buttonColor={ButtonColorSchemeType.DANGER}
        icon="BELL"
      >
        Text
      </Button>
    </div>
  );
}

export default App;
