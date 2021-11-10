import React from 'react';
import { Icon } from 'semantic-ui-react';
import * as S from './style';

function Header() {
  return (
    <S.HeaderWrapper>
      <S.SearchWrapper>
        <Icon name="search" size="large" />
        <S.SearchInputBox placeholder="검색어를 입력해주세요" />
      </S.SearchWrapper>
      <S.HeaderRightWrapper>
        <S.WeatherWrapper>
          <Icon name="rain" size="large" />
          <S.WeatherTitle>26℃</S.WeatherTitle>
        </S.WeatherWrapper>
        <S.ProfileWrapper>
          <S.ProfileImage src={'./img/profile.jpg'} />
          <S.ProfileName>농사조</S.ProfileName>
          <Icon name="caret down" size="large" />
        </S.ProfileWrapper>
        {/* <Icon name="alarm outline" size="large" /> */}
      </S.HeaderRightWrapper>
    </S.HeaderWrapper>
  );
}

export default Header;
