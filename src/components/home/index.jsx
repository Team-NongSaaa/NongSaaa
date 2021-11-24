/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
import * as S from './style';

function Home() {
  return (
    <S.Container>
      <S.HomeWrapper>
        <S.HomeContent>
          <S.TitleOne>TO THE NEXT LEVEL</S.TitleOne>
          <S.TitleTwo>AI 기반 농업 데이터 분석 솔루션 Cropper</S.TitleTwo>
          <Link to="dashboard">
            <S.BetaButton>데모 신청하기</S.BetaButton>
          </Link>
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
        <S.BodyImage2 src={'./img/home_body4.png'} />
        <S.BodyText2>
          <S.TextTitle>농작업 보조 전용 플랫폼</S.TextTitle>
          <S.TextWord2>
            <S.Word>“All-in-one” Cropper 플랫폼에서</S.Word>
            <S.Word>농작업의 모든 과정을 한 눈에</S.Word>
            <S.Word>최소의 투입으로 최대의 효율을 이뤄보세요</S.Word>
          </S.TextWord2>
        </S.BodyText2>
      </S.BodyTwo>
      <S.ApplyWrapper>
        <S.ApplyTitle>
          <S.ApplySmallTitle>
            Cropper가 고민을 해결해드립니다.
          </S.ApplySmallTitle>
          <S.ApplyBigTitle>무료 데모를 신청하세요</S.ApplyBigTitle>
          <S.ApplyInformation>
            전담 컨설턴트가 고객의 고민과 문제를 파악해 규모/상황별 활용 방안을
            안내해드려요.
          </S.ApplyInformation>
          <S.ApplyInformation>
            지금 바로 맞춤 상담을 시작하세요.
          </S.ApplyInformation>
        </S.ApplyTitle>
        <S.ApplyForm>
          <S.FormWrapper>
            <S.FormText>성</S.FormText>
            <S.FormInput></S.FormInput>
          </S.FormWrapper>
          <S.FormWrapper>
            <S.FormText>이름</S.FormText>
            <S.FormInput></S.FormInput>
          </S.FormWrapper>
          <S.FormWrapper>
            <S.FormText>이메일</S.FormText>
            <S.FormInput></S.FormInput>
          </S.FormWrapper>
          <S.FormWrapper>
            <S.FormText>농지 주소</S.FormText>
            <S.FormInput></S.FormInput>
          </S.FormWrapper>
          <S.FormWrapper>
            <S.FormText>연락처</S.FormText>
            <S.FormInput></S.FormInput>
          </S.FormWrapper>
          <S.ApplyCheckbox>
            <S.CheckboxWrapper type="checkbox"></S.CheckboxWrapper>
            <S.CheckboxText2>개인정보 수집 및 이용</S.CheckboxText2>
            <S.CheckboxText>에 동의합니다.</S.CheckboxText>
          </S.ApplyCheckbox>
          <S.ApplyCheckbox>
            <S.CheckboxWrapper type="checkbox"></S.CheckboxWrapper>
            <S.CheckboxText2>마케팅 활용 및 광고 수신</S.CheckboxText2>
            <S.CheckboxText>에 동의합니다.</S.CheckboxText>
          </S.ApplyCheckbox>
          <Link to="dashboard">
            <S.ApplyButton>무료 데모 신청하기</S.ApplyButton>
          </Link>
        </S.ApplyForm>
      </S.ApplyWrapper>
      <S.BottomWrapper>
        <S.CompanyName>Cropper</S.CompanyName>
        <S.BottomMenu>
          이용약관 | 개인정보 처리방침 | 고객센터 | ©Cropper
        </S.BottomMenu>
      </S.BottomWrapper>
    </S.Container>
  );
}

export default Home;
