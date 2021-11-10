import React from 'react';
import { Icon, Dropdown } from 'semantic-ui-react';
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
        <Icon name="alarm outline" size="large" />
        <S.ProfileWrapper>
          <S.ProfileImage src={'./img/profile.jpg'} />
          <S.ProfileName>농사조</S.ProfileName>
          <Dropdown.Menu>
            <Dropdown.Item text="New" />
            <Dropdown.Item text="Open..." description="ctrl + o" />
            <Dropdown.Item text="Save as..." description="ctrl + s" />
            <Dropdown.Item text="Rename" description="ctrl + r" />
            <Dropdown.Item text="Make a copy" />
            <Dropdown.Item icon="folder" text="Move to folder" />
            <Dropdown.Item icon="trash" text="Move to trash" />
            <Dropdown.Divider />
            <Dropdown.Item text="Download As..." />
            <Dropdown.Item text="Publish To Web" />
            <Dropdown.Item text="E-mail Collaborators" />
          </Dropdown.Menu>
        </S.ProfileWrapper>
      </S.HeaderRightWrapper>
    </S.HeaderWrapper>
  );
}

export default Header;
