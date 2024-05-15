import { Box, Grid, Typography } from '@mui/material';
import { AppContainer } from '../../shared/ui/PageContainer/PageContainer';
import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation, A11y]);

export const MainPage = () => {
  return (
    <Grid>
      <Box
        sx={{
          background: `url(../../../public/tata.jpeg) center / cover no-repeat;`,
          width: '100%',
          height: '105vh',
          position: 'relative',
        }}
      >
        <Typography
          color={'white'}
          fontSize={50}
          width={170}
          lineHeight={1}
          sx={{
            position: 'absolute',
            left: '20%',
            top: '20%',
          }}
        >
          Привет <b>Я Tata</b>
        </Typography>

        <Typography
          color={'white'}
          fontSize={50}
          width={170}
          lineHeight={1}
          sx={{
            position: 'absolute',
            top: '42%',
            right: '15%',
          }}
        >
          Telegtam <b>@ttaattaaa</b>
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'relative',
          top: -30,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 2%, rgba(255,255,255,1) 100%)',
          pt: 4,
        }}
      >
        <AppContainer>
          <Grid
            mt={4}
            container
            gap={2}
          >
            <Grid
              container
              flexDirection={'row'}
              flexWrap={'nowrap'}
              alignItems={'center'}
              justifyContent={'space-around'}
              gap={4}
            >
              <img
                src='../../../public/tata5.jpeg'
                alt='tata1'
                style={{
                  width: 400,
                  borderRadius: 16,
                }}
              />
              <Grid
                flex={0.5}
                container
                gap={2}
              >
                <Typography fontSize={24}>Добрый день!</Typography>
                <Typography fontSize={20}>
                  Меня зовут Таня, я фотограф из Красноярска. Занимаюсь
                  фотографией с 2018 года и очень сильно люблю свою работу,
                  потому что создаю шедевры
                </Typography>
                <Typography fontSize={20}>
                  На этапе подготовке к съёмке помогаю с выбором образа,
                  реквизита, локации, визажиста
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              flexDirection={'row'}
              flexWrap={'nowrap'}
              alignItems={'center'}
              justifyContent={'space-around'}
              gap={4}
            >
              <Grid
                flex={0.5}
                container
                gap={2}
              >
                <Typography fontSize={20}>
                  Фотосессии всегда проходят весело и легко, во время съемки
                  общаюсь с моделями, помогаю с позированием, стараюсь уделить
                  максимум внимания каждому, кто ко мне обратится. Ко всем
                  клиентам свой индивидуальный подход.
                </Typography>
                <Typography fontSize={24}>
                  Остальное скажут за меня мои работы:)
                </Typography>
              </Grid>
              <img
                src='../../../public/tata9.jpeg'
                alt='tata1'
                style={{
                  width: 400,
                  borderRadius: 16,
                }}
              />
            </Grid>
          </Grid>
        </AppContainer>

        <Box>
          <AppContainer>
            <Link
              to={'/love-story'}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                fontWeight={800}
                color={'black'}
                fontSize={40}
                sx={{
                  textDecoration: 'none',
                }}
              >
                Love-Story{'>'}
              </Typography>
            </Link>
          </AppContainer>
          <GallerySwiper src={photoSrc} />
        </Box>

        <Box>
          <AppContainer>
            <Link
              to={'/reportage'}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                fontWeight={800}
                color={'black'}
                fontSize={40}
                sx={{
                  textDecoration: 'none',
                }}
              >
                Репортажи{'>'}
              </Typography>
            </Link>
          </AppContainer>
          <GallerySwiper
            src={reportagSrc}
            width='620px'
          />
        </Box>

        <Box>
          <AppContainer>
            <Link
              to={'/portret'}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                fontWeight={800}
                color={'black'}
                fontSize={40}
                sx={{
                  textDecoration: 'none',
                }}
              >
                Портреты{'>'}
              </Typography>
            </Link>
          </AppContainer>
          <GallerySwiper src={portretSrc} />
        </Box>
      </Box>
    </Grid>
  );
};

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

const portretSrc = [
  '../../../public/photo/portret/1K2A8437.jpg',
  '../../../public/photo/portret/1K2A8484.jpg',
  '../../../public/photo/portret/1K2A8646.jpg',
  '../../../public/photo/portret/1K2A8749.jpg',
  '../../../public/photo/portret/_DSC2538-85.jpg',
  '../../../public/photo/portret/_DSC2551-75.jpg',
  '../../../public/photo/portret/_DSC3035-96.jpg',
  '../../../public/photo/portret/_DSC4472-40.jpg',
  '../../../public/photo/portret/_DSC4777-11.jpg',
  '../../../public/photo/portret/_DSC4918-21.jpg',
  '../../../public/photo/portret/IMG_0561.jpg',
  '../../../public/photo/portret/IMG_0569.jpg',
  '../../../public/photo/portret/IMG_0592.jpg',
  '../../../public/photo/portret/IMG_0631.jpg',
  '../../../public/photo/portret/IMG_0780.jpg',
  '../../../public/photo/portret/IMG_2196.jpg',
  '../../../public/photo/portret/IMG_2221.jpg',
  '../../../public/photo/portret/IMG_5165.jpg',
  '../../../public/photo/portret/IMG_5179.jpg',
];

const reportagSrc = [
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

interface GallerySwiperProps {
  src: string[];
  width?: string;
}
const GallerySwiper: FC<GallerySwiperProps> = ({ src, width = '300px' }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={'auto'}
      navigation
      loop
      pagination={{ clickable: true }}
    >
      {src.map((el, index) => (
        <SwiperSlide
          key={index}
          style={{ width }}
        >
          <img
            src={el}
            style={{
              height: 400,
              borderRadius: 10,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
