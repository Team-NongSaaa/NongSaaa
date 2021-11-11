import React from 'react';
import { Icon } from 'semantic-ui-react';
import Header from '../header';
import * as S from './style';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
const data = [
  { name: 'Page A', uv: 200, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 2400, amt: 2400 },
  { name: 'Page C', uv: 100, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 400, pv: 2400, amt: 2400 },
];

function DashBoard() {
  return (
    <S.Container>
      <Header />
      <S.ContentWrapper>
        <S.BoardWrapper>
          <S.BoardBox>
            <S.BoardContent>
              <S.BoardLeft>
                <Icon name="calendar alternate" size="huge" />
              </S.BoardLeft>
              <S.BoardRight>
                <S.WeatherTitle>Today</S.WeatherTitle>
                <S.WeatherTemperature>2021년 11월 12일</S.WeatherTemperature>
              </S.BoardRight>
            </S.BoardContent>
            <hr />
            <S.BoardTitle>수요일</S.BoardTitle>
          </S.BoardBox>
          <S.BoardBox>
            <S.BoardContent>
              <S.BoardLeft>
                <Icon name="sun" size="huge" />
              </S.BoardLeft>
              <S.BoardRight>
                <S.WeatherTitle>Temperature</S.WeatherTitle>
                <S.WeatherTemperature>26℃</S.WeatherTemperature>
              </S.BoardRight>
            </S.BoardContent>
            <hr />
            <S.BoardTitle>서울특별시 성북구</S.BoardTitle>
          </S.BoardBox>
          <S.BoardBox>
            <S.BoardContent>
              <S.BoardLeft>
                <Icon name="bitcoin" size="huge" />
              </S.BoardLeft>
              <S.BoardRight>
                <S.WeatherTitle>Money</S.WeatherTitle>
                <S.WeatherTemperature>+270,000</S.WeatherTemperature>
              </S.BoardRight>
            </S.BoardContent>
            <hr />
            <S.BoardTitle>예상 수익</S.BoardTitle>
          </S.BoardBox>
          <S.BoardBox>
            <S.BoardContent>
              <S.BoardLeft>
                <Icon name="tasks" size="huge" />
              </S.BoardLeft>
              <S.BoardRight>
                <S.WeatherTitle>Todo</S.WeatherTitle>
                <S.WeatherTemperature>3 tasks</S.WeatherTemperature>
              </S.BoardRight>
            </S.BoardContent>
            <hr />
            <S.BoardTitle>해야할일</S.BoardTitle>
          </S.BoardBox>
        </S.BoardWrapper>
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="#8884d8" barSize={30} />
        </BarChart>
      </S.ContentWrapper>
    </S.Container>
  );
}

export default DashBoard;
