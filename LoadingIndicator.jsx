import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

const LoadingIndicator = ({ className, ...props }) => {
  return (
    <LoadingOutlined spin className={twMerge(clsx('text-primary', className))} {...props}/>
  );
};

LoadingIndicator.propTypes = {
  className: PropTypes.string,
};

export default LoadingIndicator;
