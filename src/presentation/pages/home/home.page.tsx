import { BannerUi } from "@/presentation/components/ui/banner/banner.ui";
import { BeneficiosParaOProfissional } from "./components/beneficios-para-o-profissional/beneficios-para-o-profissional";
import { ComoFunciona } from "./components/como-funciona/como-funciona";
import { ConhecaA } from "./components/conheca-a/conheca-a";
import { Depoimentos } from "./components/depoimentos/depoimentos";
import { Hero } from "./components/hero/hero";
import { Container } from "./home.page.styles";

export const HomePage = () => {
  return (
    <Container>
      <Hero />
      <ConhecaA />
      <ComoFunciona />
      <BeneficiosParaOProfissional />
      <Depoimentos />
      <BannerUi />
    </Container>
  );
};
