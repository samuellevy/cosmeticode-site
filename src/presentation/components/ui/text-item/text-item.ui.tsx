import type { FC } from "react";
import { Banner, Container, Description, Title } from "./text-item.ui.style";

type TextItemUiProps = {
  title: string;
  description: string;
  banner_url: string;
};

export const TextItemUi: FC<TextItemUiProps> = ({ title, description, banner_url }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Description>{description}</Description>

      <Banner alt="" src={banner_url} />
    </Container>
  );
};
