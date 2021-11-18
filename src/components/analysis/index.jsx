import React from 'react';
import { Icon, Tab } from 'semantic-ui-react';
import Header from '../header';
import Tab1 from './tab1';
import Tab3 from './tab3';
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
          <Tab3 />
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
