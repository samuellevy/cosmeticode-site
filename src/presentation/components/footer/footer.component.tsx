import { SocialButton } from '../social-button/social-button.component'
import { Container, Content, Policies, Social } from './footer.component.style'

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

                    <SocialButton />
                </div>

                <hr />

                <div>
                    <p>© 2025 Cosmeticode</p>

                    <Policies>
                        <a
                            href="http://"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Política de Privacidade
                        </a>

                        <a
                            href="http://"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Termos & Condições
                        </a>
                    </Policies>
                </div>
            </Content>
        </Container>
    )
}
