import React from 'react';
import Slider from 'react-slick';
import Header from '../header';
import * as S from './style';

function Result() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    variableWidth: true,
  };
  return (
    <S.Container>
      <Header />
      <S.ContentWrapper>
        <S.Title>2021년 11월 20일 촬영 기록</S.Title>
        <S.Weather>6 ~ 15℃, 맑음</S.Weather>
        <Slider {...settings}>
          {Array.from({ length: 16 }, (v, i) => i).map((image, index) => (
            <S.ImageWrapper key={index}>
              <S.FarmImage
                src={`./img/farm/${image + 1}.jpg`}
                style={{ width: '150px', height: '150px' }}
              />
            </S.ImageWrapper>
          ))}
        </Slider>
      </S.ContentWrapper>
    </S.Container>
  );
}

export default Result;