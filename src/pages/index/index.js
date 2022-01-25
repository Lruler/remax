import * as React from 'react';
import { View, Text, Image, Button } from 'remax/wechat';
import styles from './index.css';

export default () => {
  const [count, setCount] = React.useState(0)
  return (
    <View className={styles.app}>
      <Text>{count}</Text>
      <Button onTap={() => setCount(count => count + 1)}>点我+1</Button>
    </View>
  );
};
