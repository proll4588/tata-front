import { Typography } from '@mui/material';
import { AppContainer } from '../../shared/ui/PageContainer/PageContainer';
import { ImgsList } from '../../features/ImgsList';

const photoSrc = [
  'photo/portret/1K2A8437.jpg',
  'photo/portret/1K2A8484.jpg',
  'photo/portret/1K2A8646.jpg',
  'photo/portret/1K2A8749.jpg',
  'photo/portret/_DSC2538-85.jpg',
  'photo/portret/_DSC2551-75.jpg',
  'photo/portret/_DSC3035-96.jpg',
  'photo/portret/_DSC4472-40.jpg',
  'photo/portret/_DSC4777-11.jpg',
  'photo/portret/_DSC4918-21.jpg',
  'photo/portret/IMG_0561.jpg',
  'photo/portret/IMG_0569.jpg',
  'photo/portret/IMG_0592.jpg',
  'photo/portret/IMG_0631.jpg',
  'photo/portret/IMG_0780.jpg',
  'photo/portret/IMG_2196.jpg',
  'photo/portret/IMG_2221.jpg',
  'photo/portret/IMG_5165.jpg',
  'photo/portret/IMG_5179.jpg',
];

export const PortretPage = () => {
  return (
    <AppContainer sx={{ mt: 2 }}>
      <Typography
        fontWeight={800}
        fontSize={30}
      >
        Портерты
      </Typography>
      <ImgsList src={photoSrc} />
    </AppContainer>
  );
};
