import { ButtonUi } from "@/presentation/components/ui/button/button.ui";
import { Container, Content } from "./hero.style";

export const Hero = () => {
  const handleGoToSignUp = () => {
    window.location.href = "https://app.cosmeticode.com/sign-up";
  };

  return (
    <Container>
      <figure>
        <img alt="" src="/hero/background.png" />
      </figure>

      <Content>
        <h1>
          Seu guia de <br />
          cosmiatria baseado <br />
          em evidências
        </h1>
        <p>
          Rápido, confiável, feito por <br />
          especialistas
        </p>
        <ButtonUi $variant="primary" onClick={() => handleGoToSignUp()}>
          Experimente grátis
        </ButtonUi>
      </Content>
    </Container>
  );
};
