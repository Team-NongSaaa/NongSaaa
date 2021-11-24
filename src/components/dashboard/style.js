import styled from 'styled-components';

export const Container = styled.div `
  width: 100%;
      margin-left: 171
px
;
`;

export const ContentWrapper = styled.div `
  padding: 20px;
`;

export const BoardWrapper = styled.div `
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-evenly;
`;
export const BoardBox = styled.div `
  width: 20%;
  height: 150px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
export const BoardContent = styled.div `
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;
export const BoardInnerContent = styled.div ``;
export const BoardLeft = styled.div `
  width: 40%;
  text-align: center;
`;
export const BoardRight = styled.div `
  width: 60%;
  text-align: right;
  display: flex;
  flex-direction: column;
`;
export const WeatherTitle = styled.span `
  font-size: 20px;
  font-weight: 400;
  color: #9a9a9a;
`;
export const WeatherTemperature = styled.span `
  margin: 0;
  color: #333;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;
export const BoardTitle = styled.div `
  color: #a9a9a9;
  text-align: right;
`;

export const GraphWrapper = styled.div `
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; 
`;
export const GraphWrapper1 = styled.div `
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; 
`;
export const GraphWrapper2 = styled.div `
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; 
`;
export const GraphWrapper3 = styled.div `
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; 
`;
export const ActivityWrapper = styled.div `
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
`;
export const TaskHeader = styled.div `
  display: flex;
      padding-top: 20
px
;
}
  & > p {
      font-size: 14px;
    padding: 5px
;
    color: #252631;
        background: #80808036;
    border-radius: 13
px
;
  }
`;
export const TaskContents = styled.div `
  display: flex;
  flex-direction: column;
      height: -webkit-fill-available;
  padding: 30
px
;
    width: 530
px
;
`;
export const CWrapper = styled.div `
    height: -webkit-fill-available;
     border-bottom: 1
px
 solid lightgray;
    padding: 3
px
; border-top: 1
px
 solid lightgray;
    padding: 3
px
;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;
export const TaskContent = styled.div `
  display: flex;
  flex-direction: column;
  min-width: 86
px
;
   
    margin: 5
px
;

  & > p:nth-child(1) {
      font-weight: 300}
`;
export const ChartCard2 = styled.div `
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
  margin: 20px;
  & >p {
    font-size: 14px;
    padding: 5px
;
    color: #252631;
        background: #80808036;
    border-radius: 13
px
;
  }
`;
export const ChartCard = styled.div `
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  padding-top:10px;
  padding-right: 30px;
  margin: 20px;
  & >p {
    font-size: 14px;
    padding: 5px
;
    color: #252631;
        background: #80808036;
    border-radius: 13
px
;
  }
`;