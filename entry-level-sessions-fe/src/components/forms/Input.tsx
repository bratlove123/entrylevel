import React from 'react';
import { Input } from 'antd';

const AppBaseInput: React.FC = (props) => {
  const { ...rest } = props;
  return <Input {...rest} />;
};

export default AppBaseInput;
