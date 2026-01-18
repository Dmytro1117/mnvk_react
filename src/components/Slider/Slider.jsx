import { useState } from 'react';
import { IconButton } from '../Buttons/IconButton/IconButton';
import {
  SliderSection,
  SliderContainer,
  SlidesWindow,
  SlideItem,
  SlideInfo,
  Label,
  SlideTitle,
  ActionWrapper,
} from './Slider.styled';

export const Slider = ({ data = [] }) => {
  const [activeId, setActiveId] = useState(0);

  if (!data.length) return null;

  const handlePrev = () => {
    setActiveId(prev => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveId(prev => (prev < data.length - 1 ? prev + 1 : prev));
  };

  return (
    <SliderSection>
      <SliderContainer>
        <ActionWrapper $side="left">
          <IconButton direction="left" onClick={handlePrev} disabled={activeId === 0} />
        </ActionWrapper>

        <SlidesWindow>
          {data.map((slide, idx) => {
            const isActive = idx === activeId;
            return (
              <SlideItem key={idx} $active={isActive} onClick={() => setActiveId(idx)}>
                <SlideInfo $active={isActive}>
                  <Label>{slide.label}</Label>
                  <SlideTitle>{slide.title}</SlideTitle>
                </SlideInfo>
                <img src={slide.img} alt={slide.title} />
              </SlideItem>
            );
          })}
        </SlidesWindow>

        <ActionWrapper $side="right">
          <IconButton direction="right" onClick={handleNext} disabled={activeId === data.length - 1} />
        </ActionWrapper>
      </SliderContainer>
    </SliderSection>
  );
};
