import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {list} from '@/service/HomeConteoller';
import {useState} from 'react';
import {Grid} from '@ant-design/react-native';
import Vitem from '@/components/Vitem';
import axios from 'axios';
const GridCard = (props: any) => {
  const {type} = props;
  const [lists, setLists] = useState<any>([]);
  const getList = useCallback(async () => {
    axios
      .get('https://t.zhuzm.icu/tv/res.json')
      .then((res: any) => {
        const {data} = res.data;
        if (data && data.length > 0) {
          setLists(data);
        }
      })
      .catch(err => {
        console.log(err);
      });
    // const {data} = await list();
    // if (data && data.length > 0) {
    //   setLists(data);
    // }
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
      hasLine={false}
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
