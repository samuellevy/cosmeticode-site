import { PageHeader } from '@/presentation/components/page-header/page-header.component'
import { TheApp } from '@/presentation/components/the-app/the-app.component'
import { Plans } from './components/plans/plans'

export const PlansPage = () => {
    return (
        <>
            <PageHeader
                caption="Escolha o melhor plano para você"
                title="assinatura"
            />

            <Plans />
            <TheApp $marginBottom={2.69} />
        </>
    )
}
