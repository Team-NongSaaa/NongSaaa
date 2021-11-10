import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  font-size: 1rem;
  border-radius: 0;
  min-height: 50px;
  max-height: 61px;
  background-color: hsla(0, 0%, 100%, 0.96);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 30px;
`;

export const SearchInputBox = styled.input`
  border: none;
  padding: 10px;
  width: 90%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  background: white;
  width: 500px;
  padding-left: 10px;
`;

export const WeatherWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
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
  margin-left: 15px;
`;
export const ProfileName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;
