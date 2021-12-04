import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/index';
import AboutPage from './components/about/index';
import DashBoardPage from './components/dashboard/index';
import ResultPage from './components/result/index';
import Analysis from './components/analysis';
import NavBar from './components/navbar';
import Community from './components/community';

function App() {
    return ( <
        div className = "container" >
        <
        GlobalStyle / >
        <
        NavBar / >
        <
        Switch >
        <
        Route path = "/"
        exact component = { HomePage }
        /> <
        Route path = "/about"
        exact component = { AboutPage }
        /> <
        Route path = "/dashboard"
        exact component = { DashBoardPage }
        /> <
        Route path = "/result"
        exact component = { ResultPage }
        /> <
        Route path = "/analysis"
        exact component = { Analysis }
        /> <
        Route path = "/community"
        exact component = { Community }
        />
        </Switch>
        </div>
    );
}

const GlobalStyle = createGlobalStyle `
  * {
    padding: 0px;
    margin: 0px;
    /* font-family: "애플 SD 산돌고딕 Neo", "Apple SD Gothic Neo", "Malgun Gothic", "arial sans-serif"; */
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  a {
    text-decoration: none;
  }
  .container{
    display: flex;
    flex-direction: row;
  }
`;

export default App;