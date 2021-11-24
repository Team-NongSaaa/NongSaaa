import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url('./img/homepage.jpeg');
  background-size: cover;
  background-position: center;
`;

export const HomeContent = styled.div`
  height: 40%;
  width: 100%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
`;

export const BetaButton = styled.button`
  background: #008dd4;
  color: white;
  border: none;
  height: 50px;
  width: 150px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleOne = styled.div`
  font-size: 50px;
  font-weight: 900;
  color: black;
`;

export const TitleTwo = styled.div`
  font-size: 23px;
  line-height: 35px;
  font-weight: 500;
  color: black;
`;

export const Introduction = styled.div`
  width: 100%;
  height: 300px;
  background-color: #252631;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 35px;
`;

export const IntroOne = styled.p`
  color: white;
  font-weight: 500;
  font-size: 27px;
  margin: 0;
`;

export const IntroTwo = styled.p`
  color: white;
  font-size: 27px;
  font-weight: 500;
`;

export const BodyOne = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BodyText = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 5%;
`;

export const TextTitle = styled.div`
  color: #252631;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10%;
`;

export const TextWord = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const Word = styled.div`
  font-size: 17px;
  line-height: 25px;
`;

export const BodyImage = styled.img`
  border-radius: 15px;
  margin-right: 5%;
  width: 50%;
  height: 80%;
`;

export const BodyTwo = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #d9d9dd;
`;

export const BodyText2 = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 5%;
`;

export const BodyImage2 = styled.img`
  border-radius: 15px;
  margin-left: 5%;
  width: 50%;
  height: 80%;
`;

export const TextTitle2 = styled.div`
  color: #252631;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 7%;
`;

export const TextWord2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const apply = styled.div`
  width: 100%;
  height: 800px;
`;
