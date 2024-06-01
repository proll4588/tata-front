import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { AppContainer } from '../../shared/ui/PageContainer/PageContainer';
import { useConvertImg } from '../../shared/hooks/useConvertImg';
import { useState, useMemo } from 'react';
import { ProcessImgViewer } from '../../features/ProcessImgViewer';
import { ImgsViewer } from '../../shared/ui/ImgsViewer';
import { ImgInputZone } from '../../widgets/ImgInputZone';

export const PhotoProccesPage = () => {
  const { convertImg, isLoading } = useConvertImg();
  const [selectedImg, setSelectedImg] = useState<File[] | undefined>(undefined);
  const [processedImgs, setProcessedImgs] = useState<string[] | undefined>(
    undefined
  );

  const deleteImg = () => {
    setSelectedImg(undefined);
  };

  const onProcess = () => {
    if (selectedImg) {
      convertImg(selectedImg[0]).then((ans) => {
        setProcessedImgs(ans);
      });
    }
  };

  const imgUrl = useMemo(() => {
    if (selectedImg && selectedImg[0]) {
      return URL.createObjectURL(selectedImg[0]);
    }
  }, [selectedImg]);

  const delAllImgs = () => {
    setProcessedImgs(undefined);
    setSelectedImg(undefined);
  };

  return (
    <AppContainer sx={{ pt: 2 }}>
      <Grid
        container
        alignContent={'center'}
        justifyContent={'center'}
      >
        {!processedImgs && !isLoading && (
          <Box
            sx={{
              height: 600,
              width: 600,
            }}
          >
            {!selectedImg && <ImgInputZone onSelectImg={setSelectedImg} />}

            {imgUrl && (
              <ProcessImgViewer
                src={imgUrl}
                actions={
                  <>
                    <Button
                      variant='contained'
                      onClick={onProcess}
                    >
                      Обработать
                    </Button>
                    <Button
                      variant='contained'
                      color='error'
                      onClick={deleteImg}
                    >
                      Выбрать другую
                    </Button>
                  </>
                }
              />
            )}
          </Box>
        )}

        {isLoading && (
          <Box
            sx={{
              height: 600,
              width: 600,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: 'black',
              borderStyle: 'dashed',
            }}
          >
            <CircularProgress />
            <Typography>
              Фото обрабатывается, это может занять несколько минут
            </Typography>
          </Box>
        )}

        {processedImgs && !isLoading && (
          <ImgsViewer
            images={processedImgs.map((el) => {
              return `data:image/png;base64,${el}`;
            })}
            actions={
              <>
                <Button
                  onClick={delAllImgs}
                  variant='contained'
                >
                  Обработать другое фото
                </Button>
              </>
            }
          />
        )}
      </Grid>
    </AppContainer>
  );
};
