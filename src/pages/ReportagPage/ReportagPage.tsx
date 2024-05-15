import { Typography } from '@mui/material';
import { AppContainer } from '../../shared/ui/PageContainer/PageContainer';
import { ImgsList } from '../../features/ImgsList';

const photoSrc = [
  '../../../public/photo/reportag/1K2A0088.jpg',
  '../../../public/photo/reportag/1K2A0296.jpg',
  '../../../public/photo/reportag/1K2A0362.jpg',
  '../../../public/photo/reportag/1K2A0526.jpg',
  '../../../public/photo/reportag/1K2A0683.jpg',
  '../../../public/photo/reportag/1K2A0767.jpg',
  '../../../public/photo/reportag/1K2A1022-Улучшено-Ум. шума.jpg',
  '../../../public/photo/reportag/1K2A1340.jpg',
  '../../../public/photo/reportag/1K2A2838.jpg',
  '../../../public/photo/reportag/1K2A4291.jpg',
  '../../../public/photo/reportag/1K2A4427.jpg',
  '../../../public/photo/reportag/1K2A6298.jpg',
  '../../../public/photo/reportag/1K2A6548.jpg',
  '../../../public/photo/reportag/1K2A6670.jpg',
  '../../../public/photo/reportag/1K2A1022-Улучшено-Ум. шума.jpg',
  '../../../public/photo/reportag/1K2A8379.jpg',
  '../../../public/photo/reportag/1K2A7603-Улучшено-Ум. шума.jpg',
  '../../../public/photo/reportag/1K2A8932.jpg',
  '../../../public/photo/reportag/1K2A9379.jpg',
  '../../../public/photo/reportag/1K2A9489.jpg',
  '../../../public/photo/reportag/1K2A9740.jpg',
  '../../../public/photo/reportag/1K2A9901.jpg',
  '../../../public/photo/reportag/3D0A9411.jpg',
  '../../../public/photo/reportag/DSC04737.jpg',
  '../../../public/photo/reportag/DSC04945.jpg',
];

export const ReportagPage = () => {
  return (
    <AppContainer sx={{ mt: 2 }}>
      <Typography
        fontWeight={800}
        fontSize={30}
      >
        Репортажы
      </Typography>
      <ImgsList
        src={photoSrc}
        cols={3}
      />
    </AppContainer>
  );
};
