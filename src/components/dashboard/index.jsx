import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import Header from '../header';
import * as S from './style';
import * as Icon2 from 'react-icons/fi';
import Checkbox from 'react-custom-checkbox';
import StarRatingComponent from 'react-star-rating-component';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
const data1 = [
  { name: '11/18', '온도(°C)': 8 },
  { name: '11/19', '온도(°C)': 6 },
  { name: '11/20', '온도(°C)': 4 },
  { name: '11/21', '온도(°C)': 3 },
  { name: '11/22', '온도(°C)': 8 },
  { name: '11/23', '온도(°C)': 9 },
  { name: '11/24', '온도(°C)': 7 },
  { name: '11/25', '온도(°C)': 7 },
];
const data2 = [
  { name: '11/18', '강수량(mm)': 0.0 },
  { name: '11/19', '강수량(mm)': 0.0 },
  { name: '11/20', '강수량(mm)': 1.0 },
  { name: '11/21', '강수량(mm)': 0.2 },
  { name: '11/22', '강수량(mm)': 0.0 },
  { name: '11/23', '강수량(mm)': 1.0 },
  { name: '11/24', '강수량(mm)': 0.2 },
  { name: '11/25', '강수량(mm)': 0.3 },
];
const data3 = [
  { name: '20년 4분기', '수확량(개)': 78 },
  { name: '21년 1분기', '수확량(개)': 190 },
  { name: '21년 2분기', '수확량(개)': 208 },
  { name: '21년 3분기', '수확량(개)': 215 },
];
const data4 = [
  { name: '20년 4분기', '수입(만원)': 30.24 },
  { name: '21년 1분기', '수입(만원)': 73.2 },
  { name: '21년 2분기', '수입(만원)': 86.3 },
  { name: '21년 3분기', '수입(만원)': 92.12 },
];
const data5 = [
  { name: '하위 20%', uv: 200, pv: 2400, amt: 30.2 },
  { name: '20%~40%', uv: 300, pv: 2400, amt: 40.3 },
  { name: '40%~60%', uv: 100, pv: 2400, amt: 100.2 },
  { name: '60%~80%', uv: 400, pv: 2400, amt: 70.3 },
  { name: '상위 20%', uv: 400, pv: 2400, amt: 7.3 },
];
const data6 = [
  { name: '10월 3주', '병해충 발생(%)': 3.2 },
  { name: '10월 4주', '병해충 발생(%)': 4.1 },
  { name: '11월 1주', '병해충 발생(%)': 2.2 },
  { name: '11월 2주', '병해충 발생(%)': 1.7 },
  { name: '11월 3주', '병해충 발생(%)': 1.5 },
];
const tasks = [
  { title: '배추에 물주기', due: '2021. 12. 01' },
  { title: '병충해 확인작업', due: '2021. 12. 12' },
  { title: '수확량 계산하기', due: '2021. 12. 20' },
  { title: '트렉터 후불지급일', due: '2021. 12. 20' },
  { title: '파종 작업 시작', due: '2021. 12. 24' },
];
const acts = [
  { title: '오늘 병충해 작업을 완벽하게 끝냈다.', due: '2021. 11. 01' },
  { title: '오늘 피곤해서 물을 줬었어야했는데 ㅜㅡㅜ', due: '2021. 11. 05' },
  { title: '계산에서 실수가 났다.', due: '2021. 11. 12' },
  { title: '이번 분기에 이익이 많이 났다', due: '2021. 11. 17' },
  { title: '성장률이 높은 걸 보니 기분이 좋다.', due: '2021. 11. 20' },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#2cd2f6'];
const checked = false;
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}>
        {data5[index].name}
      </text>
    </>
  );
};

function DashBoard() {
  const [rating, setrating] = useState(1);
  const onStarClick = (nextValue, prevValue, name) => {
    setrating(nextValue);
  };
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
                <S.WeatherTemperature>2021년 11월 21일</S.WeatherTemperature>
              </S.BoardRight>
            </S.BoardContent>
            <hr />
            <S.BoardTitle>일요일</S.BoardTitle>
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
        <S.GraphWrapper>
          <S.GraphWrapper1>
            <S.ChartCard>
              <p>기온의 변화</p>
              <LineChart
                width={500}
                height={300}
                data={data1}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="온도(°C)" stroke="#82ca9d" />
              </LineChart>
            </S.ChartCard>
            <S.ChartCard>
              <p>강수량의 변화</p>
              <LineChart
                width={500}
                height={300}
                data={data2}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="강수량(mm)" stroke="#82ca9d" />
              </LineChart>
            </S.ChartCard>
          </S.GraphWrapper1>
          <S.GraphWrapper2>
            <S.ChartCard>
              <p>작물 수확량</p>
              <BarChart width={500} height={300} data={data3}>
                <XAxis dataKey="name" stroke="#252631" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="수확량(개)" fill="#00ed96" barSize={30} />
              </BarChart>
            </S.ChartCard>
            <S.ChartCard>
              <p>금전적 수입</p>
              <BarChart width={500} height={300} data={data4}>
                <XAxis dataKey="name" stroke="#252631" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="수입(만원)" fill="#00ed96" barSize={30} />
              </BarChart>
            </S.ChartCard>
          </S.GraphWrapper2>
          <S.GraphWrapper3>
            <S.ChartCard>
              <p>작물 성장도 분포</p>
              <PieChart width={400} height={400}>
                <Pie
                  data={data5}
                  cx={200}
                  cy={200}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={170}
                  fill="#00ed96"
                  dataKey="amt"
                  dataName="name"
                >
                  {data5.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </S.ChartCard>
            <S.ChartCard>
              <p>작물 병해충 발생 비율</p>
              <BarChart width={600} height={300} data={data6}>
                <XAxis dataKey="name" stroke="#252631" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="병해충 발생(%)" fill="#00ed96" barSize={30} />
              </BarChart>
            </S.ChartCard>
          </S.GraphWrapper3>
        </S.GraphWrapper>
        <S.ActivityWrapper>
          <S.ChartCard2>
            <S.TaskHeader>
              <p>Active Tasks</p>
            </S.TaskHeader>
            <S.TaskContents>
              {tasks.map((task) => (
                <S.CWrapper>
                  <Checkbox
                    checked={true}
                    icon={
                      <div
                        style={{
                          display: 'flex',
                          flex: 1,
                          backgroundColor: '#174A41',
                          alignSelf: 'stretch',
                        }}
                      >
                        <Icon2.FiCheck color="white" size={20} />
                      </div>
                    }
                    borderColor="#174A41"
                    // borderWidth={0}
                    borderRadius={20}
                    style={{ overflow: 'hidden' }}
                    size={20}
                    label={task.title}
                  />
                  <S.TaskContent>
                    <p>Due to: {task.due}</p>
                  </S.TaskContent>
                </S.CWrapper>
              ))}
            </S.TaskContents>
          </S.ChartCard2>
          <S.ChartCard2>
            <S.TaskHeader>
              <p>Recent Activity</p>
            </S.TaskHeader>
            <S.TaskContents>
              {acts.map((task) => (
                <>
                  <S.TaskContent>
                    <p>일자: {task.due}</p>
                    <p>{task.title}</p>
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={rating}
                      onStarClick={onStarClick.bind(this)}
                    />
                  </S.TaskContent>
                </>
              ))}
            </S.TaskContents>
          </S.ChartCard2>
        </S.ActivityWrapper>
      </S.ContentWrapper>
    </S.Container>
  );
}

export default DashBoard;