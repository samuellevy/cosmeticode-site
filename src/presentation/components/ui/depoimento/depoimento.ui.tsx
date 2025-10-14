import type { FC } from "react";
import { Avatar, Body, Container, Description, Figure, Header, Position, Title } from "./depoimento.ui.style";

type DepoimentoUiProps = {
  avatar_url: string;
  name: string;
  position: string;
  content: string;
};

export const DepoimentoUi: FC<DepoimentoUiProps> = ({ avatar_url, name, position, content }) => {
  return (
    <Container>
      <Header>
        <Figure>
          <Avatar alt="" src={avatar_url} />
        </Figure>
        <Title>{name}</Title>
        <Position>{position}</Position>
      </Header>

      <Body>
        <Description>{content}</Description>
        <img alt="" src="/icons/quote.svg" />
      </Body>
    </Container>
  );
};
