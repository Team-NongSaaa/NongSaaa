import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;
export const TabContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
  margin: ${(props) => props.loading && '200px'};
`;
export const Title = styled.span`
  font-weight: bold;
  font-size: 20px;
`;
export const ImageWrapper = styled.div`
  margin: 30px auto;
`;
export const ImageLabel = styled.label`
  background-color: rgba(203, 203, 210, 0.15);
  border-radius: 4px;
  color: black;
  cursor: pointer;
  height: 300px;
  display: inline-block;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 17px;
  margin: 0 auto;
`;
export const ImageInput = styled.input`
  display: none;
`;

export const CropImage = styled.img`
  max-width: 300px;
`;

export const CropImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  & > i {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export const UploadBtn = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 1px solid #252631;
  padding: 10px;
  border-radius: 10px;
  background: #252631;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
export const ReUploadBtn = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 1px solid #252631;
  padding: 10px;
  border-radius: 10px;
  background: #252631;
  font-weight: bold;
  color: white;
  cursor: pointer;
  opacity: 0.5;
  margin-top: 10px;
`;
export const ResultWrapper = styled.div``;

export const ResultContentWrapper = styled.div`
  margin-top: 10px;
  font-size: 18px;
  line-height: 30px;
`;

export const ResultContent = styled.span``;

export const RedContent = styled.span`
  color: red;
  font-weight: bold;
`;

export const GreenContent = styled.span`
  color: green;
  font-weight: bold;
`;

export const ResultCount = styled.span`
  font-weight: bold;
  color: red;
`;

export const ResultBug = styled.span`
  font-weight: bold;
`;
