import { ButtonUi } from '../ui/button/button.ui'
import { Container } from './social-button.component.style'

export const SocialButton = () => {
    return (
        <Container>
            <ButtonUi>
                <img alt="" src="/icons/apple.svg" />
                Apple Store
            </ButtonUi>

            <ButtonUi>
                <img alt="" src="/icons/google.svg" />
                Google Play
            </ButtonUi>
        </Container>
    )
}
