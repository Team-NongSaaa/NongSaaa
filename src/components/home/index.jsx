import React from 'react';
import Header from '../header';
import * as S from './style';

function Home() {
  return (
    <S.Container>
      <S.HomeWrapper>
        <S.HomeContent>
          <S.TitleOne>TO THE NEXT LEVEL</S.TitleOne>
          <S.TitleTwo>AI 기반 농업 데이터 분석 솔루션 Cropper</S.TitleTwo>
          <S.BetaButton>데모 신청하기</S.BetaButton>
        </S.HomeContent>
      </S.HomeWrapper>
      <S.Introduction>
        <S.IntroOne>데이터에 기반한 과학적 농업,</S.IntroOne>
        <S.IntroTwo>Cropper “All-in-one” 솔루션</S.IntroTwo>
      </S.Introduction>
      <S.BodyOne>
        <S.BodyText>
          <S.TextTitle>빠른 농지 데이터 수집</S.TextTitle>
          <S.TextWord>
            <S.Word>더 이상 일일이 농지를 점검할 필요가 없습니다</S.Word>
            <S.Word>드론을 활용한 빠르고 손쉬운 데이터 수집</S.Word>
            <S.Word>언제나 내가 원할 때 데이터를 수집하세요</S.Word>
          </S.TextWord>
        </S.BodyText>
        <S.BodyImage src={'./img/home_body1.jpeg'} />
      </S.BodyOne>
      <S.BodyTwo>
        <S.BodyImage2 src={'./img/home_body2.png'} />
        <S.BodyText2>
          <S.TextTitle2>농지와 작물,</S.TextTitle2>
          <S.TextTitle> 정확한 데이터 분석</S.TextTitle>
          <S.TextWord2>
            <S.Word>AI가 제시하는 새로운 시대의 농업</S.Word>
            <S.Word>전체적인 농지와 작물 각각의 상태를</S.Word>
            <S.Word>AI가 정확하고 효율적으로 진단해줍니다</S.Word>
          </S.TextWord2>
        </S.BodyText2>
      </S.BodyTwo>
      <S.BodyOne>
        <S.BodyText>
          <S.TextTitle2>농작물 성장도와</S.TextTitle2>
          <S.TextTitle>수확량 예측을 한 눈에</S.TextTitle>
          <S.TextWord>
            <S.Word>내 자식 같은 우리 농작물</S.Word>
            <S.Word>현 상태는 어떻고 미래의 모습은 어떨까요?</S.Word>
            <S.Word>데이터와 함께, 풍년을 기원해보아요</S.Word>
          </S.TextWord>
        </S.BodyText>
        <S.BodyImage src={'./img/home_body3.jpeg'} />
      </S.BodyOne>
      <S.BodyTwo>
        <S.BodyImage2 src={'./img/home_body2.png'} />
        <S.BodyText2>
          <S.TextTitle>농작업 보조 전용 플랫폼</S.TextTitle>
          <S.TextWord2>
            <S.Word>“All-in-one” Cropper 플랫폼에서</S.Word>
            <S.Word>농작업의 모든 과정을 한 눈에</S.Word>
            <S.Word>최소의 투입으로 최대의 효율을 이뤄보세요</S.Word>
          </S.TextWord2>
        </S.BodyText2>
      </S.BodyTwo>
      <S.apply></S.apply>
    </S.Container>
  );
}

export default Home;
