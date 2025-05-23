import classNames from 'classnames';
import { ReactNode } from 'react';

const Container = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  const customClasses = classNames('max-w-screen-2xl mx-auto px-4', className);
  return <div className={customClasses}>{children}</div>;
};

export default Container;
