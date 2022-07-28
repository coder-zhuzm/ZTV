import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import {useTheme, Route} from '@react-navigation/native';
import Video from 'react-native-video';

interface IProps {
  route: Route<string>;
}
const Player = (props: IProps) => {
  const {params} = props.route;
  console.log('🚀 ~ file: index.tsx ~ line 9 ~ Player ~ params', params);
  const {colors} = useTheme();
  // const playerRef = useRef<any>();
  const styles = StyleSheet.create({
    title: {
      color: colors.text,
    },
    view: {
      width: '100%',
      height: 200,
      position: 'relative',
      margin: 0,
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
  return (
    <View>
      <View style={styles.view}>
        <Video
          source={{
            uri: `https://s2.fsvod1.com/20220305/sf4mwlGK/index.m3u8`,
          }} // Can be a URL or a local file.
          style={styles.backgroundVideo}
          controls={true}
        />
      </View>
      <Text style={styles.title}>Player</Text>
    </View>
  );
};

export default Player;
