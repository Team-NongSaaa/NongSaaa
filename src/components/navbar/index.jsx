import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import * as S from './style';

function NavBar() {
  return (
    <S.NavBarWrapper>
      <Link to="/">
        <S.MenuItem>
          <Icon name="pie chart" size="large" />
          <S.MenuTitle>DASHBOARD</S.MenuTitle>
        </S.MenuItem>
      </Link>
      <Link to="/search">
        <S.MenuItem exact href="/about">
          <Icon name="search" size="large" />
          <S.MenuTitle>ANALYSIS</S.MenuTitle>
        </S.MenuItem>
      </Link>
      <Link to="/community">
        <S.MenuItem exact href="/about">
          <Icon name="calendar" size="large" />
          <S.MenuTitle>COMMUNITY</S.MenuTitle>
        </S.MenuItem>
      </Link>
      <Link to="/result">
        <S.MenuItem exact href="/about">
          <Icon name="hockey puck" size="large" />
          <S.MenuTitle>RESULTS</S.MenuTitle>
        </S.MenuItem>
      </Link>
      <Link to="/about">
        <S.MenuItem exact href="/about">
          <Icon name="file" size="large" />
          <S.MenuTitle>ABOUT US</S.MenuTitle>
        </S.MenuItem>
      </Link>
    </S.NavBarWrapper>
  );
}

export default NavBar;
