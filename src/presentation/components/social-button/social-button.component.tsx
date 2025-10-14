import { ButtonUi } from "../ui/button/button.ui";
import { Container } from "./social-button.component.style";

export const SocialButton = () => {
  return (
    <Container>
      <ButtonUi onClick={() => window.open("https://apps.apple.com/app/6738370201", "_blank")}>
        <img alt="" src="/icons/apple.svg" />
        Apple Store
      </ButtonUi>

      <ButtonUi onClick={() => window.open("https://play.google.com/store/apps/details?id=com.cosmeticode", "_blank")}>
        <img alt="" src="/icons/google.svg" />
        Google Play
      </ButtonUi>
    </Container>
  );
};
