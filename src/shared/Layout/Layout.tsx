import { MenuBook } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { AppContainer } from '../ui/PageContainer/PageContainer';
import { useNavigate } from 'react-router-dom';
import { useViewModel } from '../hooks/useViewModel';
import { OrderDialog } from '../../features/OrderForm/OrderDialog';
import { RegDialog } from '../../features/AuthFrom/RegDialog';
import { LoginDialog } from '../../features/AuthFrom/LoginDialog';
import { useAuth } from '../context/AuthContext/AuthContext';
import { ContactDialog } from '../../features/ContactDialog/ContactDialog';

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

export const MyAppBar = () => {
  const navigate = useNavigate();

  const { isLogin, logOut } = useAuth();

  const [isOpenOrder, orderDiloagController] = useViewModel();
  const [isOpenLogin, loginDialogController] = useViewModel();
  const [isOpenReg, regDialogController] = useViewModel();
  const [isOpenInfo, infoDialogController] = useViewModel();

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
      {
        name: 'Контактная информация',
        action: () => {
          infoDialogController.open();
        },
      },
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

  const settings = useMemo(() => {
    return [
      {
        title: 'Выйти',
        action: logOut,
      },
      {
        title: 'Заказы',
        action: () => {
          navigate('/user-requests');
        },
      },
    ];
  }, [logOut]);

  return (
    <>
      <OrderDialog
        isOpen={isOpenOrder}
        onClose={orderDiloagController.close}
      />
      <RegDialog
        isOpen={isOpenReg}
        onClose={regDialogController.close}
      />
      <LoginDialog
        isOpen={isOpenLogin}
        onClose={loginDialogController.close}
      />

      <ContactDialog
        isOpen={isOpenInfo}
        onClose={infoDialogController.close}
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

            {!isLogin ? (
              <Box sx={{ flexGrow: 0, gap: 1, display: 'flex' }}>
                <Button
                  variant='contained'
                  color='info'
                  onClick={loginDialogController.open}
                >
                  Войти
                </Button>
                <Button
                  variant='contained'
                  color='warning'
                  onClick={regDialogController.open}
                >
                  Зарегистрироваться
                </Button>
              </Box>
            ) : (
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
                      key={setting.title}
                      onClick={() => {
                        handleCloseUserMenu();
                        setting.action();
                      }}
                    >
                      <Typography textAlign='center'>
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
          </Toolbar>
        </AppContainer>
      </AppBar>
    </>
  );
};
