import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
    type ComponentType,
    type FC,
    useCallback,
    useEffect,
    useState,
} from 'react'
import {
    Actions,
    Button,
    Container,
    Content,
    DotButton,
    Dots,
    Item,
} from './carousel.ui.style'

type CarouselUiProps = {
    slides: ComponentType[]
    options?: EmblaOptionsType
    $variant?: 'primary' | 'secondary'
    $spacing?: number
    $actionsMarginTop?: number
    $perView?: number
}

export const CarouselUi: FC<CarouselUiProps> = ({
    slides,
    options,
    $variant = 'primary',
    $spacing = 1,
    $actionsMarginTop,
    $perView = 2,
}) => {
    const [ref, api] = useEmblaCarousel(options)

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onPrevButtonClick = useCallback(() => {
        if (!api) return
        api.scrollPrev()
    }, [api])

    const onNextButtonClick = useCallback(() => {
        if (!api) return
        api.scrollNext()
    }, [api])

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!api) return
            api.scrollTo(index)
        },
        [api]
    )

    const onInit = useCallback((api: EmblaCarouselType) => {
        setScrollSnaps(api.scrollSnapList())
    }, [])

    const onSelect = useCallback((api: EmblaCarouselType) => {
        setPrevBtnDisabled(!api.canScrollPrev())
        setNextBtnDisabled(!api.canScrollNext())
        setSelectedIndex(api.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!api) return

        onInit(api)
        onSelect(api)
        api.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
    }, [api, onInit, onSelect])

    return (
        <Container>
            <Content $spacing={$spacing} ref={ref}>
                <div>
                    {slides.map((Slide, index) => (
                        <Item
                            $perView={$perView}
                            $spacing={$spacing}
                            key={index}
                        >
                            <Slide />
                        </Item>
                    ))}
                </div>
            </Content>

            <Actions $actionsMarginTop={$actionsMarginTop}>
                <Button
                    disabled={prevBtnDisabled}
                    onClick={onPrevButtonClick}
                    type="button"
                >
                    <img alt="" src="/icons/arrow-left.svg" />
                </Button>

                <Dots>
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            $isActive={index === selectedIndex}
                            $variant={$variant}
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                        />
                    ))}
                </Dots>

                <Button
                    disabled={nextBtnDisabled}
                    onClick={onNextButtonClick}
                    type="button"
                >
                    <img alt="" src="/icons/arrow-right.svg" />
                </Button>
            </Actions>
        </Container>
    )
}
