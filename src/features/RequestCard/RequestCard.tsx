import { FC, useState } from 'react';
import { ExtendedRequestItem } from '../../shared/api/requestApi';
import {
  Chip,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import dayjs from 'dayjs';

const getDateTime = (date: string): string => {
  return dayjs(date).format('DD.MM.YYYY HH:mm');
};

export interface RequestCardProps {
  request: ExtendedRequestItem;
  actions: { title: string; action: () => void }[];
}
export const RequestCard: FC<RequestCardProps> = ({ request, actions }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        width: 700,
        flexShrink: 0,
        flexGrow: 1,
      }}
    >
      {/* Header */}
      <Grid
        container
        justifyContent={'space-between'}
        alignItems={'center'}
        p={1}
      >
        <Chip label={request.statuses.title} />
        <IconButton
          onClick={handleClick}
          disabled={actions.length === 0}
        >
          <MoreVert />
        </IconButton>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {actions.map((el) => (
            <MenuItem
              onClick={() => {
                handleClose();
                el.action();
              }}
            >
              {el.title}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
      <Divider />

      {/* Body */}
      <Grid>
        <RowItem
          title='Имя'
          value={request.user_name}
        />
        <Divider />
        <RowItem
          title='Описание'
          value={request.description}
        />
        <Divider />
        <RowItem
          title='Дата'
          value={`${getDateTime(request.startDate)} - ${getDateTime(
            request.endDate
          )}`}
        />
        <Divider />
        <RowItem
          title='Номер телефона'
          value={request.phone_number}
        />
        <Divider />
        <RowItem
          title='Почта'
          value={request.email}
        />
        <Divider />
        <RowItem
          title='Цена'
          value={request.price ? String(request.price) : null}
        />
        <Divider />
        <RowItem
          title='Категория'
          value={request.photo_categorys.title}
        />
        <Divider />
        <RowItem
          title='Тип'
          value={request.photo_types.title}
        />
        <Divider />
        <RowItem
          title='Ссылка'
          value={request.photo_urls?.url || null}
        />
      </Grid>
    </Paper>
  );
};

interface RowItemProps {
  title: string;
  value: string | null;
}
const RowItem: FC<RowItemProps> = ({ title, value }) => {
  return (
    <Grid
      container
      justifyContent={'space-between'}
      gap={2}
      px={1}
      py={0.5}
    >
      <Typography fontWeight={700}>{title}:</Typography>
      <Typography>{value || '-'}</Typography>
    </Grid>
  );
};
