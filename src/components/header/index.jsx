import React from 'react';
import { Icon } from 'semantic-ui-react';
import * as S from './style';

function Header() {
  return (
    <S.HeaderWrapper>
      <S.SearchWrapper>
        <Icon name="search" size="large" />
        <S.SearchInputBox>검색어를 입력하세요</S.SearchInputBox>
      </S.SearchWrapper>
      <S.WeatherWrapper>zi</S.WeatherWrapper>
      <S.ProfileWrapper>ho</S.ProfileWrapper>
    </S.HeaderWrapper>
  );
}

export default Header;
