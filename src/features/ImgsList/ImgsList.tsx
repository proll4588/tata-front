import { Box, ImageList, ImageListItem } from '@mui/material';
import { FC } from 'react';
import { ImgsListProps } from './type';

export const ImgsList: FC<ImgsListProps> = ({ src, cols = 4 }) => {
  return (
    <Box>
      <ImageList
        variant='masonry'
        cols={cols}
        gap={8}
      >
        {src.map((item) => (
          <ImageListItem key={item}>
            <img
              src={item}
              alt={item}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
