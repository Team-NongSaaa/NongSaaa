import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  padding: 20px;
  width: 89vw;
  margin-top: 10px;
  & > .slick-slider {
    height: 500px;
    outline: none;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Weather = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 500px !important;
  height: 500px !important; ;
`;

export const FarmImage = styled.img`
  width: 500px !important;
  height: 500px !important; ;
`;
