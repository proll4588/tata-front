import { Grid, Typography } from '@mui/material';
import {
  useCancelUserRequestMutation,
  useGetUserRequestsQuery,
} from '../../shared/api/requestApi';
import { useAuth } from '../../shared/context/AuthContext/AuthContext';
import { RequestCard } from '../../features/RequestCard/RequestCard';
import { AppContainer } from '../../shared/ui/PageContainer/PageContainer';

export const UserRequestsPage = () => {
  const { getToken } = useAuth();
  const { data } = useGetUserRequestsQuery({ token: getToken()! });
  const [cancel] = useCancelUserRequestMutation();

  return (
    <AppContainer sx={{ mt: 2, pb: 2 }}>
      <Typography
        textAlign={'center'}
        fontWeight={700}
        fontSize={24}
        mb={2}
      >
        Список заказов
      </Typography>
      <Grid
        container
        alignItems={'center'}
        flexDirection={'column'}
        gap={2}
      >
        {data?.requests.map((item) => (
          <RequestCard
            request={item}
            actions={
              item.status_id === 1
                ? [
                    {
                      title: 'Отменить',
                      action: () => {
                        cancel({ requestId: item.id });
                      },
                    },
                  ]
                : []
            }
          />
        ))}
      </Grid>
    </AppContainer>
  );
};
