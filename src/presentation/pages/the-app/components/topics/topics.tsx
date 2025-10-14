import { useTheme } from "styled-components";
import { CarouselUi } from "@/presentation/components/ui/carousel/carousel.ui";
import { TopicUi } from "@/presentation/components/ui/topic/topic.ui";
import { Container } from "./topics.style";
import { DesktopOnly, MobileOnly } from "@/presentation/styles/global.style";

const data = [
  {
    icon_url: "/icons/skincare.svg",
    name: "Skincare",
  },
  {
    icon_url: "/icons/injetaveis.svg",
    name: "Injetáveis",
  },
  {
    icon_url: "/icons/guia-anatomico.svg",
    name: "Guia Anatômico",
  },
  {
    icon_url: "/icons/protocolos-e-orientacoes.svg",
    name: "Protocolos e <br /> Orientações",
  },
  {
    icon_url: "/icons/skincare.svg",
    name: "Complicações e <br /> Manejo",
  },
];

export const Topics = () => {
  const theme = useTheme();

  const slides = [
    () => <TopicUi $iconColor={theme.colors["primary-pure"]} imageUrl={data[0].icon_url} title={data[0].name} />,
    () => <TopicUi $iconColor={theme.colors["secondary-medium"]} imageUrl={data[1].icon_url} title={data[1].name} />,
    () => <TopicUi $iconColor={theme.colors["accent-green"]} imageUrl={data[2].icon_url} title={data[2].name} />,
    () => <TopicUi $iconColor={theme.colors["tertiary-dark"]} imageUrl={data[3].icon_url} title={data[3].name} />,
    () => <TopicUi $iconColor={theme.colors["accent-purple"]} imageUrl={data[4].icon_url} title={data[4].name} />,
  ];

  return (
    <Container>
      <h2>Tópicos incluídos</h2>

      <DesktopOnly>
        <CarouselUi $perView={3} slides={slides} />
      </DesktopOnly>
      <MobileOnly>
        <CarouselUi $perView={1} slides={slides} />
      </MobileOnly>
    </Container>
  );
};
