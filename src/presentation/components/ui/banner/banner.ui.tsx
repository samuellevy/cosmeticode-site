import type { FC } from "react";
import { ButtonUi } from "../button/button.ui";
import { Actions, Container, Title } from "./banner.ui.style";

type BannerUiProps = {
  $marginBottom?: number;
};

export const BannerUi: FC<BannerUiProps> = ({ $marginBottom = 8.37 }) => {
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
      <img alt="" src="/banner/background.jpg" />

      <Title>Trabalhe com segurança e agilidade, sempre disponível no consultório</Title>

      <Actions>
        <ButtonUi $variant="primary" onClick={() => handleGoToSignUp()}>
          Experimente grátis
        </ButtonUi>
        <ButtonUi $variant="neutral" onClick={() => handleDownloadApp()}>
          Baixe o app
        </ButtonUi>
      </Actions>
    </Container>
  );
};
