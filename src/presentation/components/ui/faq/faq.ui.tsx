import { type FC, useState } from 'react'
import {
    FaqAnswer,
    FaqAnswerRow,
    FaqContainer,
    FaqIcon,
    FaqTitle,
    FaqTitleRow,
} from './faq.ui.style'

interface FaqProps {
    title: string
    answer: string
    defaultOpen?: boolean
}

export const Faq: FC<FaqProps> = ({ title, answer, defaultOpen = false }) => {
    const [open, setOpen] = useState(defaultOpen)

    return (
        <FaqContainer
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            open={open}
        >
            <FaqTitleRow>
                <FaqIcon
                    alt="toggle"
                    open={open}
                    src="/icons/chevron-down.svg"
                />
                <FaqTitle>{title}</FaqTitle>
            </FaqTitleRow>
            {open && (
                <FaqAnswerRow>
                    <div style={{ width: '1.25rem' }} />
                    <FaqAnswer>{answer}</FaqAnswer>
                </FaqAnswerRow>
            )}
        </FaqContainer>
    )
}

export default Faq
