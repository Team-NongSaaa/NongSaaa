import React from 'react';
import * as S from './style';
import { Icon } from 'semantic-ui-react';

function NavBar() {
  return (
    <S.NavBarWrapper>
      <S.MenuItem exact href="/">
        <Icon name="home" size="small" />
        Home
      </S.MenuItem>
      <S.MenuItem exact href="/about">
        About
      </S.MenuItem>
    </S.NavBarWrapper>
  );
}

export default NavBar;
