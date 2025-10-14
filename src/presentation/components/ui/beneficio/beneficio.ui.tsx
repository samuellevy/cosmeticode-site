import type { FC } from "react";
import { Caption, Container, Description, Title } from "./beneficio.ui.style";

type BeneficioUiProps = {
  title: string;
  description: string;
};

export const BeneficioUi: FC<BeneficioUiProps> = ({ title, description }) => {
  return (
    <Container>
      <Caption>Seu guia confiável</Caption>
      <Title dangerouslySetInnerHTML={{ __html: title }} />
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  );
};
