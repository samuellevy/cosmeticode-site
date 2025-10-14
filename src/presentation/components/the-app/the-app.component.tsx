import type { FC } from "react";
import mockup from "@/presentation/assets/conteudo-criado/mockup.png";
import { ButtonUi } from "../ui/button/button.ui";
import { Actions, Container, Content, Mockup } from "./the-app.component.style";

type TheAppProps = {
  $marginBottom?: number;
};

export const TheApp: FC<TheAppProps> = ({ $marginBottom = 6.25 }) => {
  const handleGoToSignUp = () => {
    window.location.href = "https://app.cosmeticode.com/sign-up";
  };

  const handleDownloadApp = () => {
    // if android a link and if ios another link
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/android/i.test(userAgent)) {
      window.open("https://play.google.com/store/apps/details?id=com.cosmeticode", "_blank");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.open("https://apps.apple.com/app/6738370201", "_blank");
    } else {
      // fallback to a default link or show a message
      window.open("https://app.cosmeticode.com", "_blank");
    }
  };

  return (
    <Container $marginBottom={$marginBottom}>
      <img alt="" src="/icons/cosmeticode.svg" />
      <img alt="" src="/icons/cosmeticode.svg" />

      <Mockup $backgroundImage={mockup} />

      <Content>
        <h2>Conteúdo criado, atualizado e verificado por profissionais especializados</h2>
        <p>Pensado para encaixar na sua rotina</p>

        <Actions>
          <ButtonUi $variant="primary" onClick={() => handleGoToSignUp()}>
            Experimente grátis
          </ButtonUi>
          <ButtonUi $variant="neutral" onClick={() => handleDownloadApp()}>
            Baixe o app
          </ButtonUi>
        </Actions>
      </Content>
    </Container>
  );
};
