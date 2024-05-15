import { Typography } from '@mui/material';
import { AppContainer } from '../../shared/ui/PageContainer/PageContainer';
import { ImgsList } from '../../features/ImgsList';

const photoSrc = [
  '../../../public/photo/love-story/3D0A0320.jpg',
  '../../../public/photo/love-story/3D0A0349.jpg',
  '../../../public/photo/love-story/_DSC4193-5.jpg',
  '../../../public/photo/love-story/_DSC4224-10.jpg',
  '../../../public/photo/love-story/_DSC4240-12.jpg',
  '../../../public/photo/love-story/_DSC4400-28.jpg',
  '../../../public/photo/love-story/_DSC6062.jpg',
  '../../../public/photo/love-story/_DSC6083.jpg',
  '../../../public/photo/love-story/IMG_8428.jpg',
  '../../../public/photo/love-story/IMG_8536.jpg',
];

export const LoveStoryPage = () => {
  return (
    <AppContainer sx={{ mt: 2 }}>
      <Typography
        fontWeight={800}
        fontSize={30}
      >
        LoveStory
      </Typography>
      <ImgsList src={photoSrc} />
    </AppContainer>
  );
};
