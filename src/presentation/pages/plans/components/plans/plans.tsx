import { ButtonUi } from '@/presentation/components/ui/button/button.ui'
import {
    Background,
    Benefits,
    Container,
    MostChosen,
    Name,
    Plan,
    PlanContent,
    Price,
} from './plans.style'

const plans = [
    {
        name: 'Mensal',
        benefits: ['Acesso ilimitado', 'Versão web e app'],
        price: { monthly: 34.9 },
        mostChosen: false,
    },
    {
        name: 'Anual',
        benefits: ['Acesso ilimitado', 'Versão web e app'],
        price: { annual: 349, monthly: 29 },
        mostChosen: true,
    },
]

const formatCurrendy = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

export const Plans = () => {
    return (
        <Container>
            {plans.map((plan, index) => (
                <Plan $mostChosen={plan.mostChosen} key={index}>
                    <MostChosen $mostChosen={plan.mostChosen}>
                        <img alt="" src="/icons/star.svg" />
                        Mais escolhido
                    </MostChosen>

                    <PlanContent>
                        <Background
                            $mostChosen={plan.mostChosen}
                            alt=""
                            src="/icons/cosmeticode.svg"
                        />

                        <Name>{plan.name}</Name>

                        <hr />

                        <Benefits>
                            {plan.benefits.map((benefit, index) => (
                                <li key={index}>
                                    <img alt="" src="/icons/check.svg" />
                                    {benefit}
                                </li>
                            ))}
                        </Benefits>

                        <Price>
                            {plan.price.annual && (
                                <li className="annual">
                                    {formatCurrendy.format(plan.price.annual)}
                                </li>
                            )}

                            {plan.price.monthly && (
                                <li className="monthly">
                                    {formatCurrendy.format(plan.price.monthly)}
                                </li>
                            )}
                        </Price>

                        <ButtonUi $variant="primary">
                            Assine com 7 dias grátis
                        </ButtonUi>
                    </PlanContent>
                </Plan>
            ))}
        </Container>
    )
}
