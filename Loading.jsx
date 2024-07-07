import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

const Loading = ({ className, ...props }) => {
  return (
    <LoadingOutlined spin className={twMerge(clsx('text-2xl text-primary', className))} {...props}/>
  );
};

Loading.propTypes = {
  className: PropTypes.string,
};

export default Loading;
