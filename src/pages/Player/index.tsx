import {Text, StyleSheet, View, ImageBackground} from 'react-native';
import React, {useRef, useState} from 'react';
import {useTheme, Route} from '@react-navigation/native';
import Video from 'react-native-video';
import {Button} from '@ant-design/react-native';
interface IProps {
  route: Route<string>;
}
const Player = (props: IProps) => {
  const {params} = props.route;
  console.log('🚀 ~ file: index.tsx ~ line 9 ~ Player ~ params', params);
  const {colors} = useTheme();
  const playerRef = useRef<any>();
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
    image: {
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
      backgroundColor: colors.background,
    },
  });
  const [paused, setPaused] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<any>(
    'https://v3.dious.cc/20220524/6CBCvImT/index.m3u8',
  );
  // methods
  const onLoadStart = () => {
    console.log('onLoadStart');
  };
  const onLoad = () => {
    console.log('onload');
  };
  const onError = () => {
    console.log('onError');
  };
  return (
    <View>
      <View style={styles.view}>
        {/* <ImageBackground source={defaultImg} style={styles.image}> */}
        {paused === false && (
          <Video
            ref={playerRef}
            source={{
              uri: videoUrl,
            }} // Can be a URL or a local file.
            onBuffer={() => {
              console.log('loading video...');
            }}
            onLoad={onLoad} //加载媒体并准备播放时调用的回调函数。
            onLoadStart={onLoadStart}
            onError={onError}
            // poster={`https://upyimg.zhuzm.icu/2022/07/29/f6b974f651f0a.png`}
            poster={'https://upyimg.zhuzm.icu/2022/03/19/d3352fff103b7.gif'}
            posterResizeMode={'center'}
            controls={true} //控制按钮
            paused={paused}
            style={styles.backgroundVideo}
          />
        )}

        {/* </ImageBackground> */}
      </View>
      <View>
        <Button
          type="primary"
          onPress={() => {
            // setVideoUrl(`https://v3.dious.cc/20220524/6CBCvImT/index.m3u8`);
            setPaused(true);
            // playerRef.current.setNativeProps({
            //   paused: true,
            //   src: {
            //     uri: null,
            //   },
            // });
            // playerRef.current.setNativeProps({
            //   paused: true,
            //   src: {
            //     isNetwork: true,
            //     uri: `https://upyimg.zhuzm.icu/2022/07/29/59957dbc6f063.mp4`,
            //     type: '',
            //   },
            // });
            // playerRef.current.seek(0);
          }}>
          第一
        </Button>
        <Button
          type="primary"
          style={{marginVertical: 10}}
          onPress={() => {
            setVideoUrl(
              `https://upyimg.zhuzm.icu/2022/07/29/59957dbc6f063.mp4`,
            );
            setPaused(true);
            playerRef.current.setNativeProps({
              paused: true,
            });
            playerRef.current.seek(0);
            setTimeout(() => {
              setPaused(false);
              playerRef.current.setNativeProps({
                paused: false,
              });
            }, 2000);
          }}>
          第二
        </Button>
      </View>
    </View>
  );
};

export default Player;
