import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  font-size: 1rem;
  border-radius: 0;
  min-height: 50px;
  max-height: 60px;
  background: rgba(203, 203, 210, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const SearchInputBox = styled.input`
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: 10px;
  padding-left: 0px;
  &:focus {
    outline: none;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  background: white;
  width: 500px;
  padding-left: 10px;
  @media only screen and (max-width: 950px) {
    width: 60%;
  }
`;

export const WeatherWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  & > i {
    margin-right: 10px;
  }
`;
export const WeatherTitle = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

export const HeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const ProfileName = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
`;
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;
