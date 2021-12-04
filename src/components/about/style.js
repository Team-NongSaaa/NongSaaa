import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    margin-left: 171px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AboutWrapper = styled.div `
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;

export const AboutContent = styled.div `
    height: 35%;
    width: 85%;
    margin: auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 700;
    color: #252631;
`;

export const Line = styled.div `
    border-bottom: 5px solid #252631;
    width: 85%;
`;

export const TeamWrapper = styled.div `
    height: 500px;
    width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 50px;
`;

export const TeamMember = styled.div `
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const MemberProfile = styled.div `
    width: 90%;
    margin-bottom: 15px;
`;

export const ProfileImageOne = styled.img `
    content: url('./img/member1.jpg');
    border-radius: 50%;
    width: 100%;
    height: 100%
`;

export const ProfileImageTwo = styled.img `
    content: url('./img/member2.jpg');
    border-radius: 50%;
    width: 100%;
`;

export const ProfileImageThree = styled.img `
    content: url('./img/member3.jpg');
    border-radius: 50%;
    width: 100%;
`;

export const ProfileImageFour = styled.img `
    content: url('./img/member4.jpg');
    border-radius: 50%;
    width: 100%;
`;

export const ProfileImageFive = styled.img `
    content: url('./img/member5.jpg');
    border-radius: 50%;
    width: 100%;
`;

export const ProfileImageSix = styled.img `
    content: url('./img/member6.jpg');
    border-radius: 50%;
    width: 100%;
`;

export const MemberName = styled.div `
    color: #252631;
    font-size: 16px;
    font-weight: 700;
`;

export const IntroBreak = styled.div `
    width: 100%;
    height: 15px;
`;

export const MemberIntro = styled.div `
    font-size: 14px;
`;

export const IntroText = styled.div `
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
`;


