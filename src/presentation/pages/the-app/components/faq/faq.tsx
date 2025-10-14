import { ButtonUi } from "@/presentation/components/ui/button/button.ui";
import Faq from "@/presentation/components/ui/faq/faq.ui";
import { Container, Content, FaqContent, Header, HeaderContent, Title } from "./faq.style";
import { MobileOnly } from "@/presentation/styles/global.style";

export const FAQ = () => {
  // converte to json
  /*
  Posso cancelar quando quiser?
Sim. O cancelamento é simples e pode ser feito a qualquer momento diretamente na plataforma.

Quais são os planos de assinatura disponíveis?
Oferecemos planos mensais e anuais, com valores diferenciados e benefícios exclusivos para assinantes de longo prazo

Existe período de teste?
Sim. Você pode experimentar gratuitamente por 7 dias antes de decidir pela assinatura.

Posso acessar pelo celular e pelo computador?
Sim. O login é único e pode ser feito em diferentes dispositivos.

O Cosmeticode substitui a consulta presencial?
Não. O Cosmeticode é uma ferramenta de apoio educacional e clínico, mas não substitui a avaliação médica presencial nem orientações individualizadas ao paciente.
  */

  const faqList = [
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim. O cancelamento é simples e pode ser feito a qualquer momento diretamente na plataforma.",
    },
    {
      question: "Quais são os planos de assinatura disponíveis?",
      answer:
        "Oferecemos planos mensais e anuais, com valores diferenciados e benefícios exclusivos para assinantes de longo prazo",
    },
    {
      question: "Existe período de teste?",
      answer: "Sim. Você pode experimentar gratuitamente por 7 dias antes de decidir pela assinatura.",
    },
    {
      question: "Posso acessar pelo celular e pelo computador?",
      answer: "Sim. O login é único e pode ser feito em diferentes dispositivos.",
    },
    {
      question: "O Cosmeticode substitui a consulta presencial?",
      answer:
        "Não. O Cosmeticode é uma ferramenta de apoio educacional e clínico, mas não substitui a avaliação médica presencial nem orientações individualizadas ao paciente.",
    },
  ];

  return (
    <Container>
      <Content>
        <Header>
          <HeaderContent>
            <Title>
              Perguntas frequentes <span>Precisa de ajuda?</span>
            </Title>
            <MobileOnly>
              <hr />
            </MobileOnly>
            <ButtonUi>Fale com o suporte</ButtonUi>
          </HeaderContent>

          <hr />
        </Header>

        <FaqContent>
          {faqList.map((faq, index) => (
            <Faq key={index} answer={faq.answer} title={faq.question} />
          ))}
          {/* <Faq
            answer="Aenean et arcu at nisi pharetra mattis. Sed ex tellus, molestie at pulvinar nec, hendrerit eget ipsum. Nam tincidunt vulputate neque, et pulvinar nunc varius sit amet. Ut eu ultrices mauris. Donec sed ante congue, dapibus sapien et, dapibus odio. Integer eget faucibus enim, finibus fringilla enim. Suspendisse et nulla nulla. Vivamus quis elementum metus, ut posuere orci. Integer diam nibh, dignissim id dolor eget, luctus mollis metus. Ut a blandit lacus, ac vehicula urna."
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          /> */}

          <ButtonUi $variant="neutral">Visualizar mais</ButtonUi>
        </FaqContent>
      </Content>
    </Container>
  );
};
