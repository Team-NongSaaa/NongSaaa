import React, { useState } from 'react';
import { Icon, Tab, Loader } from 'semantic-ui-react';
import * as S from './style';

function Tab1() {
  const [cropImage, setCropImage] = useState('');
  const [aiStatus, setAiStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const imageHandler = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setCropImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <S.TabContainer loading={loading}>
      {loading ? (
        <Loader size="large" active={loading}>
          Loading
        </Loader>
      ) : aiStatus ? (
        <S.ResultWrapper>
          <S.CropImageWrapper>
            <S.CropImage src={'./img/before_bug.jpg'} />
            <Icon name="arrow right" size="big" />
            <S.CropImage src={'./img/after_bug.jpg'} />
          </S.CropImageWrapper>
          <S.ResultContentWrapper>
            <S.ResultContent>총 </S.ResultContent>
            <S.ResultCount>4</S.ResultCount>
            <S.ResultContent>개의 해충이 감지되었습니다</S.ResultContent>
          </S.ResultContentWrapper>
          <S.ResultContentWrapper>
            <S.ResultContent>발견된 해충으로는, </S.ResultContent>
          </S.ResultContentWrapper>
          <S.ResultContentWrapper>
            <S.ResultBug>
              검거세미밤나방, 담배가루이, 무잎벌, 배추흰나비
            </S.ResultBug>
            <S.ResultContent> 입니다</S.ResultContent>
          </S.ResultContentWrapper>
        </S.ResultWrapper>
      ) : (
        <>
          <S.Title>작물 해충 진단</S.Title>
          <S.ImageWrapper>
            {cropImage ? (
              <S.CropImage src={cropImage} />
            ) : (
              <>
                <S.ImageLabel for="upload-image">
                  📷 사진 업로드하기
                </S.ImageLabel>
                <S.ImageInput
                  type="file"
                  id="upload-image"
                  onChange={imageHandler}
                />
              </>
            )}
          </S.ImageWrapper>
          {cropImage && (
            <>
              <S.UploadBtn
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    setAiStatus(true);
                  }, 2000);
                }}
              >
                결과보기
              </S.UploadBtn>
              <S.ReUploadBtn onClick={() => setCropImage('')}>
                이미지 다시 업로드하기
              </S.ReUploadBtn>
            </>
          )}
        </>
      )}
    </S.TabContainer>
  );
}

export default Tab1;
