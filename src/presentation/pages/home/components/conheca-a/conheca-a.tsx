import { SectionHeader } from "../section-header/section-header";
import {
  Background,
  Container,
  Content,
  Item,
  ItemDescription,
  ItemIcon,
  ItemTitle,
  MoreButton,
} from "./conheca-a.style";

const items = [
  {
    icon_url: "/conheca-a/atualizacao-continua.png",
    title: "Atualização Contínua",
    description:
      "Informações revisadas e atualizadas com alertas quando saem novas recomendações, sempre alinhadas à prática clínica.",
  },
  {
    icon_url: "/conheca-a/baseado-em-evidencias.png",
    title: "Baseado em Evidências",
    description:
      "Conteúdo referenciado nas principais e mais atuais diretrizes e literatura científica, com curadoria de especialistas.",
  },
  {
    icon_url: "/conheca-a/pratico-e-rapido.png",
    title: "Prático e Rápido",
    description:
      "Busca inteligente, favoritos, conteúdo resumido e ilustrado, pensado para o dia a dia de atendimentos.",
  },
];

export const ConhecaA = () => {
  return (
    <Container>
      <Background alt="" src="/icons/cosmeticode.svg" />

      <SectionHeader caption="Cosmeticode" title="conheça a">
        <MoreButton $variant="secondary">Saiba mais</MoreButton>
      </SectionHeader>

      <Content>
        {items.map((item, index) => (
          <Item key={index}>
            <ItemIcon alt="" src={item.icon_url} />
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
          </Item>
        ))}
        {/* <MobileMoreButton $variant="secondary">Saiba mais</MobileMoreButton> */}
      </Content>
    </Container>
  );
};
