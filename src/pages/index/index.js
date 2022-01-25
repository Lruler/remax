import * as React from 'react';
import { View, Text, Image, Button, request } from 'remax/wechat';
// import Request from '../../service/request';
import styles from './index.css';

export default () => {


  const handleTap = () => {
    setCount(count => count + 1)
    request({
      url: 'http://localhost:8000/blog/list?page=3', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json', // 默认值
      },
      success(res) {
        console.log(res.data);
      },
      error(error) {
        console.log(error);
      },
    })
  }
  
  const [count, setCount] = React.useState(0)
  return (
    <View className={styles.app}>
      <Text>{count}</Text>
      <Button onTap={handleTap}>点我+1</Button>
    </View>
  );
};
