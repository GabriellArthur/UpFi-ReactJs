import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

interface Page {
  data: {
    url: string;
    title: string;
    description: string;
    ts: number;
    id: string;
  }[];
  after: string;
}

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    async ({ pageParam = 0 }) => {
      const response = await api.get('/api/images', {
        params: {
          after: pageParam,
        },
      });
      return response.data;
    },
    { getNextPageParam: (lastPage, pages) => lastPage.after }
  );

  const formattedData = useMemo(() => {
    return data?.pages?.flatMap((p: Page) => [...p.data]);
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {hasNextPage && (
          <Button
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
            my="8"
          >
            {isFetchingNextPage || isLoading
              ? 'Carregando...'
              : 'Carregar mais'}
          </Button>
        )}
      </Box>
    </>
  );
}