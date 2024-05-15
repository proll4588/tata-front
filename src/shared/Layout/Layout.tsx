import { Email, MenuBook, Person, Phone } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { AppContainer } from '../ui/PageContainer/PageContainer';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <CssBaseline />
      <MyAppBar />
      <Box>{children}</Box>
    </Box>
  );
};

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const MyAppBar = () => {
  const navigate = useNavigate();
  const [isOpenOrder, orderDiloagController] = useViewModel();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigateToMain = () => {
    navigate('/');
  };

  const barItemsMap = useMemo(() => {
    return [
      { name: 'Контактная информация', action: () => {} },
      {
        name: 'Заказать услугу',
        action: () => {
          orderDiloagController.open();
        },
      },
      {
        name: 'Улучшить свои фото',
        action: () => {
          navigate('/photo-process');
        },
      },
    ];
  }, []);

  return (
    <>
      <OrderDialog
        isOpen={isOpenOrder}
        onClose={orderDiloagController.close}
      />
      <AppBar position='static'>
        <AppContainer>
          <Toolbar disableGutters>
            <Typography
              onClick={navigateToMain}
              variant='h6'
              noWrap
              component='a'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              TATA
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuBook />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant='h5'
              noWrap
              component='a'
              href='#app-bar-with-responsive-menu'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              TATA
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {barItemsMap.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                    page.action();
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  <Avatar
                    alt='Remy Sharp'
                    src='/static/images/avatar/2.jpg'
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppContainer>
      </AppBar>
    </>
  );
};

//
const phoneNumberValidator = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g;

interface OrderFormFields {
  phone: string;
  email: string;
  name: string;
  description: string;
}
interface OrderFormProps {
  onSubmit: (form: OrderFormFields) => void;
  renderActions: () => ReactNode;
}
export const OrderForm: FC<OrderFormProps> = ({ onSubmit, renderActions }) => {
  const { control, handleSubmit } = useForm<OrderFormFields>();

  return (
    <Grid
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
      container
      flexDirection={'column'}
      gap={2}
      pt={1}
    >
      <Controller
        control={control}
        name='name'
        rules={{ required: true, maxLength: 30 }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextField
            label='Имя'
            placeholder='Как вас зовут'
            required
            value={value}
            error={!!error}
            helperText={error?.message || 'Мне достаточно просто вашего имени'}
            InputProps={{
              startAdornment: (
                <Person
                  sx={{ mr: 1 }}
                  color='action'
                />
              ),
            }}
            variant='standard'
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        )}
      />
      <Controller
        control={control}
        name='phone'
        rules={{ required: true, pattern: phoneNumberValidator }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextField
            label='Номер телефона'
            // placeholder='Введите свой номер телефона'
            placeholder='XXX XXX XXXX'
            required
            value={value}
            type='tel'
            prefix='+7'
            error={!!error}
            helperText={
              error?.message ||
              'Будьте на связи, чтобы я смогла с вами связаться'
            }
            InputProps={{
              startAdornment: (
                <>
                  <Phone
                    sx={{ mr: 1 }}
                    color='action'
                  />
                  <Typography
                    mr={1}
                    color={'grey'}
                  >
                    +7{' '}
                  </Typography>
                </>
              ),
            }}
            variant='standard'
            onChange={(e) => {
              const newVal = e.target.value.replace(/\D/g, '');
              //   if (/\d/.test(newVal[newVal.length - 1]))
              //     onChange(newVal.slice(0, -1));

              if (newVal.length <= 10) {
                let proc = newVal.replace(/ /gm, '');
                let num = `${proc.substring(0, 3)} ${proc.substring(
                  3,
                  6
                )} ${proc.substring(6, proc.length)}`;

                num = num.trim();
                onChange(num);
              }
            }}
          />
        )}
      />
      <Controller
        control={control}
        name='email'
        rules={{ required: true }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextField
            label='Почта'
            placeholder='Ваша почта'
            required
            value={value}
            type='email'
            error={!!error}
            helperText={
              error?.message || 'На случай если я не смогу до вас дозвониться'
            }
            InputProps={{
              startAdornment: (
                <Email
                  sx={{ mr: 1 }}
                  color='action'
                />
              ),
            }}
            variant='standard'
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        )}
      />
      <Controller
        control={control}
        name='description'
        render={({ field: { value, onChange } }) => (
          <TextField
            label='Пожелания'
            placeholder='Введите свои пожелания'
            value={value}
            multiline
            minRows={4}
            maxRows={4}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        )}
      />
      {renderActions()}
    </Grid>
  );
};

interface OrderDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export const OrderDialog: FC<OrderDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>Заказать услугу</DialogTitle>

      <DialogContent sx={{ width: 550 }}>
        <DialogContentText>
          * Заполните данную форму что-бы я могла с вами связаться.
        </DialogContentText>
        <OrderForm
          onSubmit={() => {}}
          renderActions={() => (
            <DialogActions>
              <Button
                onClick={onClose}
                color='error'
                variant='outlined'
              >
                Закрыть
              </Button>
              <Button
                type='submit'
                variant='contained'
              >
                Отправить
              </Button>
            </DialogActions>
          )}
        />
      </DialogContent>
    </Dialog>
  );
};

export const useViewModel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return [isOpen, { open, close }] as const;
};
