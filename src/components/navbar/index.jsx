import React from 'react';
import * as S from './style';


function NavBar() {
  return (
    <S.NavBarWrapper>
      <S.Title>Title</S.Title>
      <S.MenuWrapper>
          <S.MenuItem exact href='/' >
            Home
          </S.MenuItem>
          <S.MenuItem exact href='/about' >
            About
          </S.MenuItem>
      </S.MenuWrapper>
    </S.NavBarWrapper>
  );
}

export default NavBar;
