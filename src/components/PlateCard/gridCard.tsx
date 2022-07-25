import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {list} from '@/service/HomeConteoller';
import {useState} from 'react';
import {Grid} from '@ant-design/react-native';
import Vitem from '@/components/Vitem';

const GridCard = (props: any) => {
  const {type} = props;
  const [lists, setLists] = useState<any>([]);
  const getList = useCallback(async () => {
    // axios.get('http://localhost:7001/list').then((response: any) => {
    //   console.log(JSON.parse(response));
    // });
    const {data} = await list();
    if (data && data.length > 0) {
      setLists(data);
    }
  }, []);

  // render
  const renderItem = (item: any) => {
    return <Vitem data={item} />;
  };
  useEffect(() => {
    if (type) {
      getList();
    }
  }, [getList, type]);
  return (
    <Grid
      data={lists}
      columnNum={3}
      renderItem={renderItem}
      itemStyle={styles.gridItem}
    />
  );
};
const styles = StyleSheet.create({
  gridItem: {
    height: 200,
  },
});
export default GridCard;
