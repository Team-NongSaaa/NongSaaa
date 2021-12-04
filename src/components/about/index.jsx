import React from 'react';
import * as S from './style';

function About() {
  return (
    <S.Container>
      <S.AboutWrapper>
        <S.AboutContent>
            Team Cropper
        </S.AboutContent>
        <S.Line></S.Line>
      </S.AboutWrapper>
      <S.TeamWrapper>
        <S.TeamMember>
          <S.MemberProfile>
            <S.ProfileImageOne></S.ProfileImageOne>
          </S.MemberProfile>
          <S.MemberName>이재승</S.MemberName>
          <S.MemberName>CEO & Business Developing</S.MemberName>
          <S.IntroBreak></S.IntroBreak>
          <S.MemberIntro>▪ 고려대학교 통계학과 17</S.MemberIntro>
          <S.MemberIntro>/ SW벤처융합전공 7기</S.MemberIntro>
          <S.MemberIntro>▪ 고려대학교 인공지능대학원 학부연구생</S.MemberIntro>
          <S.MemberIntro>▪ 고려대학교 KU메이커스페이스 매니저</S.MemberIntro>
          <S.MemberIntro>▪ 멋쟁이사자처럼 고려대학교 6기</S.MemberIntro>
          <S.IntroBreak></S.IntroBreak>
          <S.IntroText>"팀에서 리더를 맡고 있고,</S.IntroText>
          <S.IntroText>AI Computer Vision과 하드웨어 센서를 결합하여</S.IntroText>
          <S.IntroText>유의미한 인사이트를 도출해보고 싶어요!"</S.IntroText>
        </S.TeamMember>
        <S.TeamMember>
          <S.MemberProfile>
            <S.ProfileImageTwo></S.ProfileImageTwo>
          </S.MemberProfile>
          <S.MemberName>이유진</S.MemberName>
          <S.MemberName>CMO</S.MemberName>
          <S.IntroBreak></S.IntroBreak>
          <S.MemberIntro>▪ 고려대학교 경영학과 19</S.MemberIntro>
          <S.MemberIntro>/ SW벤처융합전공 9.5기</S.MemberIntro>
          <S.IntroBreak></S.IntroBreak>
          <S.IntroText>"서비스 기획 담당 / 아이디어를 실현시키는</S.IntroText>
          <S.IntroText>좋은 서포터가 되고 싶습니다!"</S.IntroText>
        </S.TeamMember>
        <S.TeamMember>
          <S.MemberProfile>
            <S.ProfileImageThree></S.ProfileImageThree>
          </S.MemberProfile>
          <S.MemberName>김동현</S.MemberName>
          <S.MemberName>CTO</S.MemberName>
          <S.IntroBreak></S.IntroBreak>
          <S.MemberIntro>▪ 고려대학교 컴퓨터학과 16</S.MemberIntro>
          <S.MemberIntro>▪ 멋쟁이사자처럼 고려대학교 8기</S.MemberIntro>
          <S.MemberIntro>▪ Naver Glace CIC Internship</S.MemberIntro>
          <S.MemberIntro>▪ SW Maestro 12기</S.MemberIntro>
          <S.IntroBreak></S.IntroBreak>
          <S.IntroText>"JS 기반 풀스택을 지향하는 개발자입니다!</S.IntroText>
          <S.IntroText>세상에 도움이 되는 서비스를 만드는</S.IntroText>
          <S.IntroText>창업가를 꿈꾸고 있습니다 (:"</S.IntroText>
        </S.TeamMember>
      </S.TeamWrapper>
      <S.TeamWrapper>
        <S.TeamMember>
          <S.MemberProfile>
            <S.ProfileImageFour></S.ProfileImageFour>
          </S.MemberProfile>
          <S.MemberName>임희래</S.MemberName>
          <S.MemberName>Developer</S.MemberName>
          <S.IntroBreak></S.IntroBreak>
          <S.MemberIntro>▪ 고려대학교 컴퓨터학과 16</S.MemberIntro>
          <S.IntroBreak></S.IntroBreak>
          <S.IntroText>"개발을 열심히 배워나가고 있는 학생입니다.</S.IntroText>
          <S.IntroText>막히더라도 뚫고 나가겠습니다!"</S.IntroText>
        </S.TeamMember>
        <S.TeamMember>
          <S.MemberProfile>
            <S.ProfileImageFive></S.ProfileImageFive>
          </S.MemberProfile>
          <S.MemberName>전혜린</S.MemberName>
          <S.MemberName>Developer</S.MemberName>
          <S.IntroBreak></S.IntroBreak>
          <S.MemberIntro>▪ 고려대학교 중어중문학과 19</S.MemberIntro>
          <S.MemberIntro>/ SW벤처융합전공 9기</S.MemberIntro>
          <S.MemberIntro>▪ 멋쟁이사자처럼 고려대학교 9기</S.MemberIntro>
          <S.MemberIntro>▪ 2020 고려대학교 인공지능 프로젝트 우수상</S.MemberIntro>
          <S.MemberIntro>▪ 2021 멋쟁이사자처럼 고려대학교 해커톤 3등</S.MemberIntro>
          <S.IntroBreak></S.IntroBreak>
          <S.IntroText>"컴퓨터 지식에 대한 이해와 함께</S.IntroText>
          <S.IntroText>인문학적 소양을 갖춘 개발자가 되고 싶은 사람입니다."</S.IntroText>
        </S.TeamMember>
        <S.TeamMember>
          <S.MemberProfile>
            <S.ProfileImageSix></S.ProfileImageSix>
          </S.MemberProfile>
          <S.MemberName>박가영</S.MemberName>
          <S.MemberName>Developer</S.MemberName>
          <S.IntroBreak></S.IntroBreak>
          <S.MemberIntro>▪ 고려대학교 건축사회환경공학부 20</S.MemberIntro>
          <S.MemberIntro>/ SW벤처융합전공 10기</S.MemberIntro>
          <S.MemberIntro>▪ 멋쟁이사자처럼 고려대학교 9기</S.MemberIntro>
          <S.MemberIntro>▪ 수강신청알리미 ver 3.0 프론트 개발자</S.MemberIntro>
          <S.MemberIntro>▪ Uridentity, 뭐먹지 테스트 개인 개발 및 배포</S.MemberIntro>
          <S.IntroBreak></S.IntroBreak>
          <S.IntroText>"React.js를 이용해서 웹프론트엔드 역할을 담당하며,</S.IntroText>
          <S.IntroText>새로운 기술을 이용해서 세상에 변화를 가져오는</S.IntroText>
          <S.IntroText>사람을 꿈꾸고 있습니다."</S.IntroText>
        </S.TeamMember>
      </S.TeamWrapper>
    </S.Container>
  );
}

export default About;
