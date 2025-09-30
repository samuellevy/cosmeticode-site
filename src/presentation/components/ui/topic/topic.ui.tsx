import type { FC } from 'react'
import SVG from 'react-inlinesvg'
import { BackgroundSymbol, Thumb, ThumbFlag, ThumbText } from './topic.ui.style'

interface TopicUiProps {
    title: string
    $iconColor: string
    imageUrl: string
}

export const TopicUi: FC<TopicUiProps> = ({ title, $iconColor, imageUrl }) => {
    return (
        <Thumb>
            <ThumbFlag $iconColor={$iconColor}>
                <SVG height={'25px'} src={imageUrl} width="25px" />
            </ThumbFlag>

            <ThumbText dangerouslySetInnerHTML={{ __html: title }} />

            <BackgroundSymbol $iconColor={$iconColor}>
                <SVG src={imageUrl} />
            </BackgroundSymbol>
        </Thumb>
    )
}
