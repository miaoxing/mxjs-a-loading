import { LoadingOutlined } from '@ant-design/icons';
import { Box } from '@mxjs/a-box';

const Loading = (props) => <Box fontSize="2xl" color="primary" {...props}>
  <LoadingOutlined spin/>
</Box>;

export default Loading;
