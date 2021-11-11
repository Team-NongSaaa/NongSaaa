import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  padding: 20px;
`;

export const BoardWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-evenly;
`;
export const BoardBox = styled.div`
  width: 20%;
  height: 150px;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: initial;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 15px;
  justify-content: space-around;
`;
export const BoardContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;
export const BoardInnerContent = styled.div``;
export const BoardLeft = styled.div`
  width: 40%;
  text-align: center;
`;
export const BoardRight = styled.div`
  width: 60%;
  text-align: right;
  display: flex;
  flex-direction: column;
`;
export const WeatherTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #9a9a9a;
`;
export const WeatherTemperature = styled.span`
  margin: 0;
  color: #333;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;
export const BoardTitle = styled.div`
  color: #a9a9a9;
  text-align: right;
`;
