import { DesktopOnly } from "@/presentation/styles/global.style";
import { SocialButton } from "../social-button/social-button.component";
import { Container, Content, Policies, Social } from "./footer.component.style";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <img alt="" src="/icons/cosmeticode.svg" />

        <div>
          <Social>
            <p>
              Intagram <span>cosmeticode.app</span>
            </p>

            <p>
              Suporte <span>contato@cosmeticode.com </span>
            </p>
          </Social>

          <DesktopOnly>
            <SocialButton />
          </DesktopOnly>
        </div>

        <hr />

        <div>
          <p>© 2025 Cosmeticode</p>

          <Policies>
            <a href="https://app.cosmeticode.com/docs/privacy-policy" rel="noopener noreferrer" target="_blank">
              Política de Privacidade
            </a>

            <a href="https://app.cosmeticode.com/docs/terms-of-use" rel="noopener noreferrer" target="_blank">
              Termos & Condições
            </a>
          </Policies>
        </div>
      </Content>
    </Container>
  );
};
