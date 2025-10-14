import { DepoimentoUi } from "@/presentation/components/ui/depoimento/depoimento.ui";
import { SectionHeader } from "../section-header/section-header";
import { Container, Content } from "./depoimentos.style";
import { DesktopOnly, MobileOnly } from "@/presentation/styles/global.style";
import { CarouselUi } from "@/presentation/components/ui/carousel/carousel.ui";

const depoimentos = [
  {
    avatar_url: "/depoimento/lais-penedo.png",
    name: "Dra Laís Penedo",
    position: "Dermatologista",
    content:
      "Cosmeticode é realmente revolucionário. É excelente ter, em um só lugar, informações extremamente confiáveis sobre todo o universo da cosmiatria, seja para uma consulta rápida que ajuda no dia a dia ou mesmo para estudar sobre conteúdos mais aprofundados! Mudou a minha rotina e eu amei!",
  },
  {
    avatar_url: "/depoimento/carmen-novoa.png",
    name: "Carmen Nóvoa",
    position: "Dermatologista",
    content:
      "O aplicativo facilitou muito meus atendimentos por ter informações importantes e de rápido acesso . Excelente!",
  },
  {
    avatar_url: "/depoimento/fernanda-alves.png",
    name: "Dra. Fernanda Alves",
    position: "Dermatologista",
    content:
      "A Cosmeticode tem me ajudado muito na prática clínica. Como dermatologista, preciso de informações rápidas e seguras, e o app entrega exatamente isso.",
  },
];

const slides = [
  () => (
    <DepoimentoUi
      avatar_url={depoimentos[0].avatar_url}
      content={depoimentos[0].content}
      key={`${0}-${depoimentos[0].name}`}
      name={depoimentos[0].name}
      position={depoimentos[0].position}
    />
  ),
  () => (
    <DepoimentoUi
      avatar_url={depoimentos[1].avatar_url}
      content={depoimentos[1].content}
      key={`${1}-${depoimentos[1].name}`}
      name={depoimentos[1].name}
      position={depoimentos[1].position}
    />
  ),
  () => (
    <DepoimentoUi
      avatar_url={depoimentos[2].avatar_url}
      content={depoimentos[2].content}
      key={`${2}-${depoimentos[2].name}`}
      name={depoimentos[2].name}
      position={depoimentos[2].position}
    />
  ),
];

export const Depoimentos = () => {
  return (
    <Container>
      <SectionHeader caption="A voz de quem usa" title="Depoimentos" />

      <Content>
        {/* <div style={{ width: "170%" }}>
          {depoimentos.map((depoimento, index) => (
            <div style={{ width: "100%", marginBottom: "1rem" }} key={index}>
              <DepoimentoUi
                avatar_url={depoimento.avatar_url}
                content={depoimento.content}
                key={`${index}-${depoimento.name}`}
                name={depoimento.name}
                position={depoimento.position}
              />
            </div>
          ))}
        </div> */}

        <DesktopOnly>
          <CarouselUi $variant="secondary" slides={slides} $perView={3} />
        </DesktopOnly>
        <MobileOnly>
          <div style={{ width: "100%" }}>
            <CarouselUi $variant="secondary" $perView={1} slides={slides} />
          </div>
        </MobileOnly>
      </Content>
    </Container>
  );
};
