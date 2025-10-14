import { PageHeader } from "@/presentation/components/page-header/page-header.component";
import { TheApp } from "@/presentation/components/the-app/the-app.component";
import { Beneficios } from "./components/beneficios/beneficios";
import { FAQ } from "./components/faq/faq";
import { Header } from "./components/header/header";
import { Topics } from "./components/topics/topics";

export const TheAppPage = () => {
  return (
    <>
      <PageHeader caption="Cosmeticode" title="conheça o nosso app" />

      <Header />
      <Beneficios />
      <Topics />
      <TheApp />
      <FAQ />
    </>
  );
};
