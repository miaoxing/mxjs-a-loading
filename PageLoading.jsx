import Loading from './Loading';
import { Box } from '@mxjs/a-box';

const PageLoading = () => {
  return <Box textAlign="center" my={5}>
    <Loading/>
    <Box mt={4}>努力加载中...</Box>
  </Box>;
};

export default PageLoading;
