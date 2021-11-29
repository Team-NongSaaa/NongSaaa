import React from 'react';
import Header from '../header';
import * as S from './style';

function Community() {
  return (
    <S.Container>
      <Header />
      <S.CImg src={'./img/community.png'} />
      <S.ImgText>
        <p>Comming Soom</p>
      </S.ImgText>
    </S.Container>
  );
}
export default Community;
