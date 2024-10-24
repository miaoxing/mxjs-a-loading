import { Spin } from 'antd';
import PropTypes from 'prop-types';

const LOADING_DELAY = 300;

const PageLoading = ({ children, ...props }) => {
  return (
    <Spin delay={LOADING_DELAY} {...props}>
      {children}
    </Spin>
  );
};

PageLoading.propTypes = {
  children: PropTypes.node,
};

export default PageLoading;
