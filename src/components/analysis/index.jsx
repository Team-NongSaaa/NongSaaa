import React from 'react';
import { Tab } from 'semantic-ui-react';
import Header from '../header';
import Tab1 from './tab1';
import Tab2 from './tab2';
import * as S from './style';

function Analysis() {
  const panes = [
    {
      menuItem: '작물 해충 진단',
      render: () => (
        <Tab.Pane>
          <Tab1 />
        </Tab.Pane>
      ),
    },
    {
      menuItem: '작물 & 잡초 영역 분류',
      render: () => (
        <Tab.Pane>
          <Tab2 />
        </Tab.Pane>
      ),
    },
  ];
  return (
    <S.Container>
      <Header />
      <S.TabContainer>
        <Tab panes={panes} />
      </S.TabContainer>
    </S.Container>
  );
}

export default Analysis;
