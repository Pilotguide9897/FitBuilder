import React from 'react';
import { Progress } from 'antd';

const Progress = ({ percent }) => (
  <Progress percent={percent} status="active" />
);
